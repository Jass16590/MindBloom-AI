import { BookOpen, Flower2, Home, LineChart, Languages } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { Dashboard } from './components/Dashboard.jsx';
import Journal from './components/Journal.jsx';
import Progress from './components/Progress.jsx';
import { BreathingExercise, CheckIn, KumbhakaPractice, KumbhakaSafety, MindfulnessPractice, Recommendation, Reflection } from './components/PracticeFlow.jsx';
import { GentleBreathing, PranayamaLibrary, PranayamaPractice, PranayamaSafety } from './components/Pranayama.jsx';
import { getCopy, languages } from './i18n.js';
import { getKumbhakaProfile } from './lib/kumbhaka.js';
import { getRecommendation } from './lib/recommendations.js';
import { readWellnessData, writeWellnessData } from './lib/storage.js';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [language, setLanguage] = useState('en');
  const [data, setData] = useState(() => readWellnessData());
  const [storageError, setStorageError] = useState(Boolean(data.storageUnavailable));
  const [mood, setMood] = useState('');
  const [minutes, setMinutes] = useState(5);
  const [pending, setPending] = useState(null);
  const [rating, setRating] = useState(0);
  const [response, setResponse] = useState('');
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
  const [kumbhakaDuration, setKumbhakaDuration] = useState(2);
  const [kumbhakaMode, setKumbhakaMode] = useState('retention');
  const [selectedPranayama, setSelectedPranayama] = useState(null);
  const [pranayamaSource, setPranayamaSource] = useState('library');
  const t = getCopy(language);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    try {
      writeWellnessData({ sessions: data.sessions, entries: data.entries });
    } catch {
      setStorageError(true);
    }
  }, [data]);

  const quickReset = () => {
    setMood('Okay');
    setMinutes(5);
    setPending({ mood: 'Okay', minutes: 5, activityId: 'five-minute-reset', activity: t.fiveReset, recommendation: getRecommendation(language, 'Stressed', 5), source: 'home' });
    setScreen('session');
  };

  const continueCheckIn = () => {
    if (!mood || !minutes) { setFormError(t.errorMood); return; }
    setFormError('');
    setLoading(true);
    window.setTimeout(() => setLoading(false), 320);
    setScreen('recommendation');
  };

  const startPractice = () => {
    setPending({ mood, minutes, recommendation: getRecommendation(language, mood, minutes), source: 'recommendation' });
    setScreen('session');
  };

  const beginKumbhaka = () => {
    setKumbhakaDuration(getKumbhakaProfile(mood).minutes);
    setScreen('kumbhaka-safety');
  };

  const startKumbhaka = (mode) => {
    setKumbhakaMode(mode);
    setPending({ mood, minutes: kumbhakaDuration, activityId: 'gentle-kumbhaka', activity: t.kumbhakaTitle, source: 'kumbhaka' });
    setScreen('kumbhaka-practice');
  };

  const selectPranayama = (practiceId, source = 'library') => {
    setSelectedPranayama(practiceId);
    setPranayamaSource(source);
    setScreen('pranayama-safety');
  };

  const returnFromPranayama = () => setScreen(pranayamaSource === 'recommendation' ? 'recommendation' : 'pranayama-library');

  const completeExercise = useCallback(() => {
    setRating(0);
    setResponse('');
    setFormError('');
    setScreen((current) => current === 'session' || current === 'kumbhaka-practice' ? 'reflection' : current);
  }, []);

  const saveSession = () => {
    if (!rating) { setFormError(t.errorRating); return; }
    const session = { id: crypto.randomUUID(), mood: pending?.mood || mood || 'Okay', minutes: pending?.minutes || minutes, activityId: pending?.activityId || pending?.recommendation?.id, activity: pending?.activity || pending?.recommendation?.title, rating, reflection: response.trim(), createdAt: new Date().toISOString() };
    setData((current) => ({ ...current, sessions: [...current.sessions, session] }));
    setPending(null);
    setScreen('progress');
  };

  const saveJournalEntry = (text) => {
    const entry = { id: crypto.randomUUID(), text, createdAt: new Date().toISOString() };
    setData((current) => ({ ...current, entries: [...current.entries, entry] }));
  };

  const sessions = data.sessions || [];
  const resetCount = sessions.filter((session) => session.activityId === 'five-minute-reset' || (!session.activityId && session.minutes === 5)).length;
  const dates = new Set(sessions.map((session) => new Date(session.createdAt).toDateString()));
  const weekStart = new Date();
  weekStart.setHours(0, 0, 0, 0);
  weekStart.setDate(weekStart.getDate() - weekStart.getDay());
  const weekSessions = sessions.filter((session) => new Date(session.createdAt) >= weekStart);
  const weekResetCount = weekSessions.filter((session) => session.activityId === 'five-minute-reset' || (!session.activityId && session.minutes === 5)).length;
  const today = new Date();
  if (!dates.has(today.toDateString())) today.setDate(today.getDate() - 1);
  let streak = 0;
  while (dates.has(today.toDateString())) { streak += 1; today.setDate(today.getDate() - 1); }
  const homeNavActive = ['home', 'checkin', 'recommendation', 'session', 'reflection', 'kumbhaka-safety', 'kumbhaka-practice'].includes(screen);
  const pranayamaNavActive = screen.startsWith('pranayama') || screen === 'gentle-breathing';

  return (
    <div className="app-frame">
      <header className="topbar">
        <button className="brand" onClick={() => setScreen('home')} aria-label="MindBloom AI home">
          <span className="brand-mark"><Flower2 size={22} strokeWidth={1.6} /></span>
          <span className="brand-name">MindBloom <i>AI</i></span>
        </button>
        <nav className="main-nav" aria-label="Main navigation">
          <button className={homeNavActive ? 'active' : ''} aria-current={homeNavActive ? 'page' : undefined} onClick={() => setScreen('home')}><Home size={16} />{t.home}</button>
          <button className={pranayamaNavActive ? 'active' : ''} aria-current={pranayamaNavActive ? 'page' : undefined} onClick={() => setScreen('pranayama-library')}><Flower2 size={16} />{t.pranayama}</button>
          <button className={screen === 'journal' ? 'active' : ''} aria-current={screen === 'journal' ? 'page' : undefined} onClick={() => setScreen('journal')}><BookOpen size={16} />{t.journal}</button>
          <button className={screen === 'progress' ? 'active' : ''} aria-current={screen === 'progress' ? 'page' : undefined} onClick={() => setScreen('progress')}><LineChart size={16} />{t.progress}</button>
        </nav>
        <label className="language-picker"><Languages size={16} /><span className="sr-only">{t.language}</span><select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label={t.language}>{languages.map((item) => <option value={item.id} key={item.id}>{item.label}</option>)}</select></label>
      </header>

      {storageError && <div className="storage-alert" role="status">{t.errorStorage}</div>}
      {screen === 'home' && <Dashboard t={t} sessionCount={weekSessions.length} resetCount={weekResetCount} streak={streak} onCheckIn={() => { setFormError(''); setScreen('checkin'); }} onReset={quickReset} />}
      {screen === 'checkin' && <CheckIn t={t} mood={mood} setMood={setMood} minutes={minutes} setMinutes={setMinutes} onContinue={continueCheckIn} onBack={() => setScreen('home')} error={formError} />}
      {screen === 'recommendation' && <Recommendation t={t} language={language} mood={mood} minutes={minutes} onStart={startPractice} onStartKumbhaka={beginKumbhaka} onSelectPranayama={selectPranayama} onOpenLibrary={() => setScreen('pranayama-library')} onBack={() => setScreen('checkin')} loading={loading} />}
      {screen === 'pranayama-library' && <PranayamaLibrary mood={mood} language={language} t={t} onSelect={(id) => selectPranayama(id, 'library')} onBack={() => setScreen('home')} />}
      {screen === 'pranayama-safety' && <PranayamaSafety practiceId={selectedPranayama} language={language} t={t} onContinue={() => setScreen('pranayama-practice')} onGentle={() => setScreen('gentle-breathing')} onBack={returnFromPranayama} />}
      {screen === 'pranayama-practice' && <PranayamaPractice practiceId={selectedPranayama} language={language} t={t} onFinish={returnFromPranayama} onBack={() => setScreen('pranayama-safety')} />}
      {screen === 'gentle-breathing' && <GentleBreathing language={language} t={t} onBack={returnFromPranayama} />}
      {screen === 'kumbhaka-safety' && <KumbhakaSafety t={t} mood={mood} duration={kumbhakaDuration} setDuration={setKumbhakaDuration} onContinue={() => startKumbhaka('retention')} onGentle={() => startKumbhaka('no-retention')} onBack={() => setScreen('recommendation')} />}
      {screen === 'kumbhaka-practice' && <KumbhakaPractice t={t} mood={pending?.mood || mood} duration={pending?.minutes || kumbhakaDuration} mode={kumbhakaMode} onComplete={completeExercise} onBack={() => setScreen('kumbhaka-safety')} />}
      {screen === 'session' && pending?.recommendation?.id === 'five-minute-reset' && <BreathingExercise t={t} minutes={pending.minutes} onComplete={completeExercise} onBack={() => setScreen(pending.source === 'recommendation' ? 'recommendation' : 'home')} />}
      {screen === 'session' && pending?.recommendation && pending.recommendation.id !== 'five-minute-reset' && <MindfulnessPractice t={t} mood={pending.mood || mood} minutes={pending.minutes} onComplete={completeExercise} onBack={() => setScreen('recommendation')} />}
      {screen === 'reflection' && <Reflection t={t} rating={rating} setRating={setRating} response={response} setResponse={setResponse} onSave={saveSession} error={formError} />}
      {screen === 'journal' && <Journal t={t} entries={data.entries || []} onSave={saveJournalEntry} />}
      {screen === 'progress' && <Progress t={t} sessions={sessions} />}

      <footer className="safety-footer"><span className="footer-flower"><Flower2 size={18} /></span><p>{t.safety}</p></footer>
    </div>
  );
}