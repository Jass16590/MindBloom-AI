import { ArrowLeft, ArrowRight, BookOpen, Check, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { getMoodPranayama, getPranayamaCopy, getPranayamaLibrary, getPranayamaPractice } from '../lib/pranayama.js';

function PracticeCard({ practice, label, t, onSelect }) {
  return (
    <article className="pranayama-card">
      {label && <span className="eyebrow">{label}</span>}
      <div className="pranayama-card-heading"><h3>{practice.name}</h3><span className="pranayama-category">{practice.category}</span></div>
      <p className="pranayama-subtitle">{practice.subtitle}</p>
      <div className="pranayama-card-meta"><span>{practice.duration}</span><span>{practice.beginnerGuidance}</span></div>
      <button className="button button-outline" onClick={() => onSelect(practice.id)}>{t.viewPractice}<ArrowRight size={16} /></button>
    </article>
  );
}

export function MoodPranayama({ mood, language, t, onSelect, onOpenLibrary }) {
  const recommendations = getMoodPranayama(mood, language);
  if (!recommendations) return null;
  return (
    <section className="mood-pranayama" aria-labelledby="mood-pranayama-heading">
      <div className="pranayama-section-heading"><div><span className="eyebrow">{t.pranayamaForMood}</span><h2 id="mood-pranayama-heading">{t.moods[mood]}</h2></div><button className="text-back" onClick={onOpenLibrary}><BookOpen size={16} />{t.openPranayamaLibrary}</button></div>
      <div className="pranayama-card-grid">
        <PracticeCard practice={recommendations.primary} label={t.primaryPractice} t={t} onSelect={onSelect} />
        <PracticeCard practice={recommendations.alternative} label={t.alternativePractice} t={t} onSelect={onSelect} />
      </div>
    </section>
  );
}

export function PranayamaLibrary({ mood, language, t, onSelect, onBack }) {
  const practices = getPranayamaLibrary(language);
  const gentle = practices.filter((practice) => practice.category === getPranayamaPractice('nadi-shodhana', language).category);
  const vigorous = practices.filter((practice) => practice.category === getPranayamaPractice('kapalabhati', language).category);
  const moodRecommendations = getMoodPranayama(mood, language);

  return (
    <main className="page-shell pranayama-library-page">
      <button className="text-back" onClick={onBack}><ArrowLeft size={16} />{t.home}</button>
      <header className="section-heading pranayama-library-heading"><div><span className="eyebrow">{t.pranayama}</span><h1>{t.pranayamaLibrary}</h1><p>{t.libraryIntro}</p></div><span className="heading-icon"><BookOpen size={22} /></span></header>
      <aside className="pranayama-general-safety"><ShieldCheck size={19} /><div><strong>{getPranayamaCopy(language).generalSafetyTitle}</strong><p>{getPranayamaCopy(language).generalSafety}</p></div></aside>
      {moodRecommendations && <section className="library-recommendations"><div className="pranayama-section-heading"><div><span className="eyebrow">{t.pranayamaForMood}</span><h2>{t.moods[mood]}</h2></div></div><div className="pranayama-card-grid"><PracticeCard practice={moodRecommendations.primary} label={t.primaryPractice} t={t} onSelect={onSelect} /><PracticeCard practice={moodRecommendations.alternative} label={t.alternativePractice} t={t} onSelect={onSelect} /></div></section>}
      <section className="pranayama-library-section"><div className="pranayama-section-heading"><h2>{t.gentlePractices}</h2></div><div className="pranayama-card-grid">{gentle.map((practice) => <PracticeCard key={practice.id} practice={practice} t={t} onSelect={onSelect} />)}</div></section>
      <section className="pranayama-library-section vigorous-library-section"><div className="pranayama-section-heading"><div><h2>{t.vigorousPractices}</h2><p>{t.chooseIntentionally}</p></div></div><div className="pranayama-card-grid">{vigorous.map((practice) => <PracticeCard key={practice.id} practice={practice} t={t} onSelect={onSelect} />)}</div></section>
    </main>
  );
}

function PracticeMetadata({ practice, t }) {
  return (
    <dl className="pranayama-metadata">
      <div><dt>{t.duration}</dt><dd>{practice.duration}</dd></div>
      <div><dt>{t.beginnerGuidance}</dt><dd>{practice.beginnerGuidance}</dd></div>
      {practice.rounds && <div><dt>{t.rounds}</dt><dd>{practice.rounds}</dd></div>}
      {practice.restBetweenRounds && <div><dt>{t.restBetweenRounds}</dt><dd>{practice.restBetweenRounds}</dd></div>}
      <div><dt>{t.breathRetention}</dt><dd>{practice.retention}</dd></div>
    </dl>
  );
}

export function PranayamaSafety({ practiceId, language, t, onContinue, onGentle, onBack }) {
  const practice = getPranayamaPractice(practiceId, language);
  const copy = getPranayamaCopy(language);
  return (
    <main className="page-shell pranayama-detail-page">
      <button className="text-back" onClick={onBack}><ArrowLeft size={16} />{t.backToLibrary}</button>
      <header className="pranayama-detail-heading"><span className="eyebrow">{practice.category}</span><h1>{practice.name}</h1><p>{practice.subtitle}</p></header>
      <PracticeMetadata practice={practice} t={t} />
      <aside className="pranayama-general-safety"><ShieldCheck size={19} /><div><strong>{copy.generalSafetyTitle}</strong><p>{copy.generalSafety}</p></div></aside>
      <aside className="safety-notice pranayama-specific-safety"><strong>{t.practiceSafety}</strong><p>{practice.safety}</p></aside>
      <div className="kumbhaka-safety-actions"><button className="button button-dark" onClick={onContinue}>{t.continueToPractice}<ArrowRight size={17} /></button><button className="button button-outline" onClick={onGentle}>{t.useGentleBreathingLibrary}<ArrowRight size={17} /></button></div>
    </main>
  );
}

export function PranayamaPractice({ practiceId, language, t, onFinish, onBack }) {
  const practice = getPranayamaPractice(practiceId, language);
  const copy = getPranayamaCopy(language);
  const [retentionEnabled, setRetentionEnabled] = useState(false);

  return (
    <main className="page-shell pranayama-detail-page pranayama-practice-page">
      <button className="text-back" onClick={onBack}><ArrowLeft size={16} />{t.back}</button>
      <header className="pranayama-detail-heading"><span className="eyebrow">{practice.category}</span><h1>{practice.name}</h1><p>{practice.subtitle}</p></header>
      <PracticeMetadata practice={practice} t={t} />
      {practice.optionalRetention && <div className="retention-control"><label><input type="checkbox" checked={retentionEnabled} onChange={(event) => setRetentionEnabled(event.target.checked)} /><span>{t.optionalRetentionToggle}</span></label><small>{retentionEnabled ? copy.optionalHold : t.retentionOff}</small></div>}
      <section className="pranayama-instructions"><h2>{t.practiceInstructions}</h2><ol>{practice.instructions.map((instruction) => <li key={instruction}>{instruction}</li>)}</ol>{retentionEnabled && <p className="optional-retention-note">{copy.optionalHold}</p>}</section>
      <aside className="safety-notice pranayama-specific-safety"><strong>{t.practiceSafety}</strong><p>{practice.safety}</p></aside>
      <button className="button button-dark finish-pranayama" onClick={onFinish}><Check size={17} />{t.finishPractice}</button>
    </main>
  );
}

export function GentleBreathing({ language, t, onBack }) {
  const copy = getPranayamaCopy(language).gentleFallback;
  return (
    <main className="page-shell pranayama-detail-page gentle-breathing-page">
      <button className="text-back" onClick={onBack}><ArrowLeft size={16} />{t.backToLibrary}</button>
      <header className="pranayama-detail-heading"><span className="eyebrow">{t.gentlePractices}</span><h1>{copy.name}</h1><p>{copy.subtitle}</p></header>
      <section className="gentle-breathing-content"><p>{copy.guidance}</p><ol>{t.gentleBreathingInstructions.map((instruction) => <li key={instruction}>{instruction}</li>)}</ol><p className="gentle-breathing-safety">{copy.safety}</p></section>
      <button className="button button-outline" onClick={onBack}>{t.gentleBreathingReturn}</button>
    </main>
  );
}