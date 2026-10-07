import { Activity, CalendarDays, Wind } from 'lucide-react';

function currentStreak(sessions) {
  const dates = new Set(sessions.map((session) => new Date(session.createdAt).toDateString()));
  const cursor = new Date();
  if (!dates.has(cursor.toDateString())) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (dates.has(cursor.toDateString())) { streak += 1; cursor.setDate(cursor.getDate() - 1); }
  return streak;
}

function dateLabel(value, t) {
  const date = new Date(value);
  const today = new Date();
  if (date.toDateString() === today.toDateString()) return t.today;
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) return t.yesterday;
  return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

export default function Progress({ t, sessions }) {
  const resetCount = sessions.filter((session) => session.activityId === 'five-minute-reset' || (!session.activityId && session.minutes === 5)).length;
  const average = sessions.length ? (sessions.reduce((sum, session) => sum + session.rating, 0) / sessions.length).toFixed(1) : '—';
  const stats = [
    { icon: Activity, label: t.totalSessions, value: sessions.length },
    { icon: Wind, label: t.resetSessions, value: resetCount },
    { icon: CalendarDays, label: t.streak, value: `${currentStreak(sessions)} ${t.days}` },
  ];

  return (
    <main className="page-shell progress-page">
      <header className="section-heading"><div><span className="eyebrow">{t.progress}</span><h1>{t.progressTitle}</h1><p>{t.progressIntro}</p></div><div className="average-rating"><strong>{average}</strong><span>{t.rating} / 10</span></div></header>
      <section className="progress-stats">{stats.map(({ icon: Icon, label, value }) => <article className="progress-stat" key={label}><span className="stat-icon"><Icon size={19} /></span><strong>{value}</strong><span>{label}</span></article>)}</section>
      <section className="session-history"><div className="history-heading"><h2>{t.recent}</h2><span>{t.sessions}</span></div>
        {sessions.length === 0 ? <p className="empty-state">{t.noSessions}</p> : [...sessions].reverse().slice(0, 8).map((session) => (
          <article className="session-row" key={session.id}>
            <span className="session-date">{dateLabel(session.createdAt, t)}</span>
            <span className={`session-mood mood-${session.mood.toLowerCase()}`} aria-hidden="true">●</span>
            <span className="session-description"><strong>{session.activityId === 'gentle-kumbhaka' ? t.kumbhakaTitle : session.activity || (session.minutes === 5 ? t.fiveReset : t.practiceTitle)}</strong><small>{t.moods[session.mood]} · {session.minutes} {t.minutes}</small></span>
            <span className="session-rating">{session.rating}<small> / 10</small></span>
          </article>
        ))}
      </section>
      <p className="reported-note">{t.userReported}</p>
    </main>
  );
}