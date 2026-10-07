const STORAGE_KEY = 'mindbloom-ai-data-v1';
const validMoods = new Set(['Calm', 'Okay', 'Restless', 'Stressed', 'Low']);

function isValidTimestamp(value) {
  return typeof value === 'string' && Number.isFinite(Date.parse(value));
}

function isValidSession(session) {
  return session !== null
    && typeof session === 'object'
    && typeof session.id === 'string'
    && validMoods.has(session.mood)
    && typeof session.minutes === 'number'
    && Number.isFinite(session.minutes)
    && session.minutes > 0
    && typeof session.rating === 'number'
    && Number.isFinite(session.rating)
    && session.rating >= 1
    && session.rating <= 10
    && isValidTimestamp(session.createdAt)
    && (session.activityId === undefined || typeof session.activityId === 'string')
    && (session.activity === undefined || typeof session.activity === 'string')
    && (session.reflection === undefined || typeof session.reflection === 'string');
}

function isValidEntry(entry) {
  return entry !== null
    && typeof entry === 'object'
    && typeof entry.id === 'string'
    && typeof entry.text === 'string'
    && isValidTimestamp(entry.createdAt);
}

export function readWellnessData() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { sessions: [], entries: [] };
    const parsed = JSON.parse(raw);
    return {
      sessions: Array.isArray(parsed.sessions) ? parsed.sessions.filter(isValidSession) : [],
      entries: Array.isArray(parsed.entries) ? parsed.entries.filter(isValidEntry) : [],
    };
  } catch {
    return { sessions: [], entries: [], storageUnavailable: true };
  }
}

export function writeWellnessData(data) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}