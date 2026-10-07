import { ArrowRight, Flower2, Leaf, Wind } from 'lucide-react';

export function Dashboard({ t, sessionCount, resetCount, streak, onCheckIn, onReset }) {
  return (
    <main className="page-shell dashboard-page">
      <section className="welcome-block">
        <div>
          <p className="eyebrow">{t.welcome}</p>
          <h1>{t.greeting}</h1>
          <p className="welcome-copy">{t.subtitle}</p>
        </div>
        <div className="welcome-mark" aria-hidden="true"><Flower2 size={68} strokeWidth={1.1} /></div>
      </section>

      <section className="dashboard-grid" aria-label={t.yourPractice}>
        <article className="reset-card">
          <div className="reset-card-top">
            <span className="icon-disc"><Wind size={20} /></span>
            <span className="practice-length">05:00</span>
          </div>
          <p className="eyebrow">{t.fiveReset}</p>
          <h2>{t.pauseBreatheReflect}</h2>
          <p className="card-description">{t.instructionSit}</p>
          <button className="button button-light" onClick={onReset}>
            {t.beginReset}<ArrowRight size={17} aria-hidden="true" />
          </button>
          <div className="leaf-mark" aria-hidden="true"><Leaf size={94} strokeWidth={0.8} /></div>
        </article>

        <article className="checkin-card">
          <div className="checkin-orbit" aria-hidden="true"><span /><span /><span /></div>
          <span className="eyebrow">{t.yourPractice}</span>
          <h2>{t.checkIn}</h2>
          <p>{t.subtitle}</p>
          <button className="button button-dark" onClick={onCheckIn}>
            {t.checkIn}<ArrowRight size={17} aria-hidden="true" />
          </button>
        </article>
      </section>

      <section className="stats-row" aria-label={t.userReported}>
        <div className="stats-heading">
          <span className="eyebrow">{t.thisWeek}</span>
          <h2>{t.yourPractice}</h2>
        </div>
        <div className="stat-item"><strong>{sessionCount}</strong><span>{t.sessions}</span></div>
        <div className="stat-item"><strong>{resetCount}</strong><span>{t.resets}</span></div>
        <div className="stat-item"><strong>{streak}<small> {t.days}</small></strong><span>{t.streak}</span></div>
      </section>
      <p className="reported-note">{t.userReported}</p>
    </main>
  );
}