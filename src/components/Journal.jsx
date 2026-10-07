import { ArrowUpRight, BookOpen, Feather } from 'lucide-react';
import { useState } from 'react';

export default function Journal({ t, entries, onSave }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const save = (event) => {
    event.preventDefault();
    if (!text.trim()) { setError(t.errorJournal); return; }
    onSave(text.trim());
    setText('');
    setError('');
  };

  return (
    <main className="page-shell journal-page">
      <header className="section-heading"><div><span className="eyebrow">{t.journal}</span><h1>{t.journalTitle}</h1><p>{t.journalIntro}</p></div><span className="heading-icon"><BookOpen size={23} /></span></header>
      <section className="journal-layout">
        <form className="journal-compose" onSubmit={save}>
          <span className="prompt-icon"><Feather size={18} /></span>
          <p className="journal-prompt">{t.journalPrompt}</p>
          <label className="sr-only" htmlFor="journal-entry">{t.journalPlaceholder}</label>
          <textarea id="journal-entry" value={text} onChange={(event) => setText(event.target.value)} placeholder={t.journalPlaceholder} maxLength={2000} rows={7} />
          <div className="compose-bottom">{error && <span className="form-error" role="alert">{error}</span>}<button className="button button-dark" type="submit">{t.saveEntry}<ArrowUpRight size={16} /></button></div>
        </form>
        <section className="entry-list"><h2>{t.yourEntries}<span>{entries.length}</span></h2>
          {entries.length === 0 ? <p className="empty-state">{t.noEntries}</p> : entries.map((entry) => (
            <article className="entry-item" key={entry.id}><time dateTime={entry.createdAt}>{new Date(entry.createdAt).toLocaleDateString()}</time><p>{entry.text}</p></article>
          ))}
        </section>
      </section>
      <p className="reported-note">{t.safety}</p>
    </main>
  );
}