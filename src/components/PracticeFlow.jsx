import { ArrowLeft, ArrowRight, Check, Pause, Play, RotateCcw } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getRecommendation } from '../lib/recommendations.js';
import { getKumbhakaProfile } from '../lib/kumbhaka.js';
import { MoodPranayama } from './Pranayama.jsx';

const moodIds = ['Calm', 'Okay', 'Restless', 'Stressed', 'Low'];
const times = [5, 10, 15, 20];

const moodEmoji = { Calm: '◌', Okay: '≈', Restless: '⌁', Stressed: '∿', Low: '·' };
export function CheckIn({ t, mood, setMood, minutes, setMinutes, onContinue, onBack, error }) {
  return (
    <main className="page-shell flow-page">
      <button className="text-back" onClick={onBack}><ArrowLeft size={16} />{t.home}</button>
      <div className="flow-heading"><span className="step-kicker">01 / 03</span><h1>{t.moodQuestion}</h1><p>{t.chooseMood}</p></div>
      <div className="mood-grid" role="group" aria-label={t.moodQuestion}>
        {moodIds.map((id) => (
          <button key={id} className={`mood-option ${mood === id ? 'selected' : ''}`} aria-pressed={mood === id} onClick={() => setMood(id)}>
            <span className={`mood-symbol mood-${id.toLowerCase()}`} aria-hidden="true">{moodEmoji[id]}</span>
            <span>{t.moods[id]}</span>
            {mood === id && <Check className="selected-check" size={15} aria-hidden="true" />}
          </button>
        ))}
      </div>
      <div className="time-section">
        <div className="flow-heading compact"><h2>{t.timeQuestion}</h2><p>{t.chooseTime}</p></div>
        <div className="time-grid" role="group" aria-label={t.timeQuestion}>
          {times.map((time) => <button key={time} className={`time-option ${minutes === time ? 'selected' : ''}`} aria-pressed={minutes === time} onClick={() => setMinutes(time)}>{time} <span>{t.minutes}</span></button>)}
        </div>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <div className="flow-actions"><button className="button button-dark" onClick={onContinue}>{t.continue}<ArrowRight size={17} /></button></div>
    </main>
  );
}

export function Recommendation({ t, language, mood, minutes, onStart, onStartKumbhaka, onSelectPranayama, onOpenLibrary, onBack, loading }) {
  const recommendation = getRecommendation(language, mood, minutes);
  const kumbhaka = getKumbhakaProfile(mood);
  return (
    <main className="page-shell flow-page recommendation-page">
      <button className="text-back" onClick={onBack}><ArrowLeft size={16} />{t.back}</button>
      <div className="recommendation-panel">
        <span className="recommendation-flower" aria-hidden="true">✳</span>
        <span className="step-kicker">02 / 03</span>
        <p className="eyebrow">{t.recommendation}</p>
        <h1>{recommendation.title}</h1>
        <p className="recommendation-detail">{recommendation.detail}</p>
        <div className="selection-summary">
          <div className="summary-line"><span>{t.youSelected}</span><strong>{t.moods[mood]}</strong></div>
          <div className="summary-line"><span>{t.duration}</span><strong>{minutes} {t.minutes}</strong></div>
        </div>
        <button className="button button-dark" onClick={onStart} disabled={loading}>
          {loading ? <span className="loading-dots" aria-label="Loading"><i /><i /><i /></span> : <>{t.startPractice}<ArrowRight size={17} /></>}
        </button>
      </div>
      <section className="kumbhaka-offer" aria-labelledby="kumbhaka-offer-title">
        <div className="kumbhaka-offer-heading">
          <span className="eyebrow">{t.kumbhakaOffer}</span>
          <h2 id="kumbhaka-offer-title">{t.kumbhakaTitle}</h2>
        </div>
        <p>{t.kumbhakaRecommendations[mood]}</p>
        <div className="kumbhaka-offer-meta">
          <span>{t.inhaleLabel} {kumbhaka.inhale} <i>•</i> {t.holdLabel} {kumbhaka.hold} <i>•</i> {t.exhaleLabel} {kumbhaka.exhale}</span>
          <strong>{mood === 'Stressed' ? t.rangeDuration : `${kumbhaka.minutes} ${t.minutes}`}</strong>
        </div>
        <button className="button button-outline" onClick={onStartKumbhaka}>{t.tryKumbhaka}<ArrowRight size={17} /></button>
      </section>
      <MoodPranayama mood={mood} language={language} t={t} onSelect={(id) => onSelectPranayama(id, 'recommendation')} onOpenLibrary={onOpenLibrary} />
      <p className="local-recommendation">{t.localRecommendations}</p>
    </main>
  );
}

export function KumbhakaSafety({ t, mood, duration, setDuration, onContinue, onGentle, onBack }) {
  const pattern = getKumbhakaProfile(mood);
  const durationOptions = mood === 'Stressed' ? [3, 4, 5] : [pattern.minutes];
  return (
    <main className="page-shell flow-page kumbhaka-safety-page">
      <button className="text-back" onClick={onBack}><ArrowLeft size={16} />{t.back}</button>
      <p className="eyebrow">{t.moods[mood]}</p>
      <h1>{t.kumbhakaTitle}</h1>
      <p className="kumbhaka-pattern-line">{t.inhaleLabel} {pattern.inhale} <i>•</i> {t.holdLabel} {pattern.hold} <i>•</i> {t.exhaleLabel} {pattern.exhale}</p>
      <p className="kumbhaka-reason">{t.kumbhakaRecommendations[mood]}</p>
      {mood === 'Stressed' && <fieldset className="kumbhaka-duration-choice">
        <legend>{t.duration}</legend>
        <div className="time-grid">{durationOptions.map((option) => <button key={option} className={`time-option ${duration === option ? 'selected' : ''}`} aria-pressed={duration === option} onClick={() => setDuration(option)}>{option} <span>{t.minutes}</span></button>)}</div>
      </fieldset>}
      <div className="safety-notice" role="note"><strong>{t.safetyNoticeTitle}</strong><p>{t.safetyNotice}</p></div>
      <div className="kumbhaka-safety-actions">
        <button className="button button-dark" onClick={onContinue}>{t.continueKumbhaka}<ArrowRight size={17} /></button>
        <button className="button button-outline" onClick={onGentle}>{t.useGentleBreathing}<ArrowRight size={17} /></button>
      </div>
    </main>
  );
}

function formatDuration(seconds) {
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

export function KumbhakaPractice({ t, mood, duration, mode, onComplete, onBack }) {
  const pattern = getKumbhakaProfile(mood);
  const phases = mode === 'retention'
    ? [{ id: 'inhale', seconds: pattern.inhale }, { id: 'hold', seconds: pattern.hold }, { id: 'exhale', seconds: pattern.exhale }]
    : [{ id: 'inhale', seconds: pattern.inhale }, { id: 'exhale', seconds: pattern.exhale }];
  const cycleSeconds = phases.reduce((total, phase) => total + phase.seconds, 0);
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const cyclePosition = elapsed % cycleSeconds;
  let phaseOffset = 0;
  let currentPhase = phases[0];
  for (const phase of phases) {
    currentPhase = phase;
    if (cyclePosition < phaseOffset + phase.seconds) break;
    phaseOffset += phase.seconds;
  }
  const phaseRemaining = currentPhase.seconds - (cyclePosition - phaseOffset);
  const totalSeconds = duration * 60;
  const timeRemaining = Math.max(0, totalSeconds - elapsed);
  const patternLine = `${t.inhaleLabel} ${pattern.inhale} • ${mode === 'retention' ? `${t.holdLabel} ${pattern.hold}` : t.noHold} • ${t.exhaleLabel} ${pattern.exhale}`;
  const guidance = mode === 'retention' ? t.kumbhakaGuidance[mood] : t.gentleBreathingGuidance[mood];
  const safetyText = mode === 'retention' ? t.safetyNotice : t.gentleBreathingSafety;
  const controlLabel = running ? t.pause : elapsed === 0 ? t.start : t.resume;

  useEffect(() => {
    if (!running) return undefined;
    const timer = window.setInterval(() => setElapsed((value) => Math.min(totalSeconds, value + 1)), 1000);
    return () => window.clearInterval(timer);
  }, [running, totalSeconds]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setRunning(false);
      onComplete();
    }
  }, [timeRemaining, onComplete]);

  const reset = () => { setRunning(false); setElapsed(0); };

  return (
    <main className="page-shell exercise-page kumbhaka-practice-page">
      <button className="text-back" onClick={onBack}><ArrowLeft size={16} />{t.back}</button>
      <div className="kumbhaka-practice-heading">
        <span className="eyebrow">{t.moods[mood]}</span>
        <h1>{t.kumbhakaTitle}</h1>
        <p>{patternLine}</p>
      </div>
      <div className="kumbhaka-layout">
        <section className="kumbhaka-timer-side">
          <div className={`kumbhaka-orb phase-${currentPhase.id} ${running ? 'is-running' : ''}`}>
            <div className="kumbhaka-orb-content">
              <span>{t.currentPhase}</span>
              <strong aria-live="polite" aria-atomic="true">{t.kumbhakaPhases[currentPhase.id]}</strong>
              <small>{t.phaseCountdown}</small>
              <b>{phaseRemaining}</b>
            </div>
          </div>
          <div className="kumbhaka-total"><span>{t.totalRemaining}</span><strong>{formatDuration(timeRemaining)}</strong></div>
          <div className="timer-controls">
            <button className="button button-dark" onClick={() => setRunning((value) => !value)}>
              {running ? <Pause size={17} /> : <Play size={17} />}{controlLabel}
            </button>
            <button className="icon-button" onClick={reset} aria-label={t.reset} title={t.reset}><RotateCcw size={18} /></button>
          </div>
        </section>
        <aside className="kumbhaka-guidance">
          <p className="kumbhaka-pattern-line">{patternLine}</p>
          <p className="kumbhaka-guidance-copy">{guidance}</p>
          <div className="safety-notice compact-safety"><strong>{t.safetyNoticeTitle}</strong><p>{safetyText}</p></div>
        </aside>
      </div>
    </main>
  );
}

function formatTime(seconds) {
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

const phaseAt = (elapsed) => {
  const phase = elapsed % 14;
  if (phase < 4) return 'inhale';
  if (phase < 6) return 'hold';
  if (phase < 12) return 'exhale';
  return 'rest';
};

export function BreathingExercise({ t, minutes, onComplete, onBack }) {
  const duration = minutes * 60;
  const [remaining, setRemaining] = useState(duration);
  const [running, setRunning] = useState(false);
  const phase = phaseAt(duration - remaining);

  useEffect(() => {
    if (!running) return undefined;
    const timer = window.setInterval(() => setRemaining((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [running]);

  useEffect(() => {
    if (remaining === 0) {
      setRunning(false);
      onComplete();
    }
  }, [remaining, onComplete]);

  const reset = () => { setRunning(false); setRemaining(duration); };
  const controlLabel = running ? t.pause : remaining === duration ? t.start : t.resume;

  return (
    <main className="page-shell exercise-page">
      <button className="text-back" onClick={onBack}><ArrowLeft size={16} />{t.back}</button>
      <div className="exercise-layout">
        <section className="breathing-side">
          <span className="step-kicker">03 / 03</span>
          <p className="eyebrow">{minutes === 5 ? t.fiveReset : `${minutes} ${t.minutes}`}</p>
          <h1>{minutes === 5 ? t.resetTitle : t.practiceTitle}</h1>
          <p className="exercise-instruction">{t.instructionSit}</p>
          <div className={`breathing-orb phase-${phase} ${running ? 'is-running' : ''}`}>
            <div className="orb-inner"><span className="orb-phase" aria-live="polite" aria-atomic="true">{t.phases[phase]}</span><strong className="timer-value">{formatTime(remaining)}</strong></div>
          </div>
          <p className="phase-instruction">{t[phase]}</p>
          <div className="timer-controls">
            <button className="button button-dark" onClick={() => setRunning((value) => !value)}>
              {running ? <Pause size={17} /> : <Play size={17} />}{controlLabel}
            </button>
            <button className="icon-button" onClick={reset} aria-label={t.reset} title={t.reset}><RotateCcw size={18} /></button>
          </div>
        </section>
        <aside className="breathing-guide">
          <span className="guide-number">01</span><p>{t.instructionSit}</p>
          <span className="guide-number">02</span><p>{t.inhale}</p>
          <span className="guide-number">03</span><p>{t.exhale}</p>
          <span className="guide-number">04</span><p>{t.wandering}</p>
          <div className="guide-note">{t.userReported}</div>
        </aside>
      </div>
    </main>
  );
}

export function MindfulnessPractice({ t, mood, minutes, onComplete, onBack }) {
  const duration = minutes * 60;
  const [remaining, setRemaining] = useState(duration);
  const [running, setRunning] = useState(false);
  const practice = t.mindfulPractices[mood] || t.mindfulPractices.Okay;

  useEffect(() => {
    if (!running) return undefined;
    const timer = window.setInterval(() => setRemaining((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [running]);

  useEffect(() => {
    if (remaining === 0) {
      setRunning(false);
      onComplete();
    }
  }, [remaining, onComplete]);

  const reset = () => { setRunning(false); setRemaining(duration); };
  const controlLabel = running ? t.pause : remaining === duration ? t.start : t.resume;

  return (
    <main className="page-shell exercise-page">
      <button className="text-back" onClick={onBack}><ArrowLeft size={16} />{t.back}</button>
      <div className="exercise-layout">
        <section className="breathing-side mindful-practice-side">
          <span className="step-kicker">03 / 03</span>
          <p className="eyebrow">{minutes} {t.minutes}</p>
          <h1>{practice.title}</h1>
          <p className="exercise-instruction">{practice.description}</p>
          <div className="mindful-practice-timer">
            <span>{t.duration}</span>
            <strong className="timer-value">{formatTime(remaining)}</strong>
          </div>
          <div className="timer-controls">
            <button className="button button-dark" onClick={() => setRunning((value) => !value)}>
              {running ? <Pause size={17} /> : <Play size={17} />}{controlLabel}
            </button>
            <button className="icon-button" onClick={reset} aria-label={t.reset} title={t.reset}><RotateCcw size={18} /></button>
          </div>
        </section>
        <aside className="breathing-guide mindful-practice-guide">
          {practice.instructions.map((instruction, index) => (
            <div className="mindful-step" key={instruction}><span className="guide-number">{String(index + 1).padStart(2, '0')}</span><p>{instruction}</p></div>
          ))}
          <div className="guide-note">{t.userReported}</div>
        </aside>
      </div>
    </main>
  );
}

export function Reflection({ t, rating, setRating, response, setResponse, onSave, error }) {
  return (
    <main className="page-shell flow-page reflection-page">
      <span className="step-kicker">A GENTLE CHECK-OUT</span>
      <h1>{t.reflectionTitle}</h1>
      <p className="reflection-question">{t.feelNow}</p>
      <fieldset className="rating-fieldset">
        <legend>{t.ratingQuestion}</legend>
        <div className="rating-scale" role="group" aria-label={t.ratingQuestion}>
          {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => <button key={value} type="button" className={rating === value ? 'selected' : ''} aria-pressed={rating === value} aria-label={`${value} / 10`} onClick={() => setRating(value)}>{value}</button>)}
        </div>
        <div className="scale-ends"><span>1</span><span>10</span></div>
      </fieldset>
      <label className="field-label" htmlFor="reflection-response">{t.reflectionPrompt}</label>
      <textarea id="reflection-response" value={response} onChange={(event) => setResponse(event.target.value)} placeholder={t.reflectionPlaceholder} maxLength={500} rows={4} />
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-dark" onClick={onSave}>{t.saveSession}<ArrowRight size={17} /></button>
    </main>
  );
}