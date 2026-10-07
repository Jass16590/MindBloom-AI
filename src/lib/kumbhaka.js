const profiles = {
  Calm: { inhale: 4, hold: 2, exhale: 4, minutes: 2 },
  Okay: { inhale: 4, hold: 2, exhale: 6, minutes: 2 },
  Restless: { inhale: 4, hold: 1, exhale: 6, minutes: 3 },
  Stressed: { inhale: 3, hold: 1, exhale: 6, minutes: 3, maxMinutes: 5 },
  Low: { inhale: 3, hold: 1, exhale: 5, minutes: 3 },
};

export function getKumbhakaProfile(mood) {
  return profiles[mood] || profiles.Okay;
}