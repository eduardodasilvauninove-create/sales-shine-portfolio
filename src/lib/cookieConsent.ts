// LGPD Cookie Consent helpers
export type ConsentCategories = {
  necessary: true; // sempre ativo
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

export type ConsentRecord = {
  version: number;
  timestamp: string;
  categories: ConsentCategories;
};

const STORAGE_KEY = "365s_cookie_consent";
const CURRENT_VERSION = 1;
export const OPEN_PREFERENCES_EVENT = "365s:open-cookie-preferences";
export const CONSENT_UPDATED_EVENT = "365s:consent-updated";

export const defaultCategories: ConsentCategories = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

export function getConsent(): ConsentRecord | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed.version !== CURRENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(categories: ConsentCategories) {
  const record: ConsentRecord = {
    version: CURRENT_VERSION,
    timestamp: new Date().toISOString(),
    categories: { ...categories, necessary: true },
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  window.dispatchEvent(
    new CustomEvent(CONSENT_UPDATED_EVENT, { detail: record })
  );
  return record;
}

export function acceptAll() {
  return saveConsent({
    necessary: true,
    analytics: true,
    marketing: true,
    preferences: true,
  });
}

export function rejectAll() {
  return saveConsent({ ...defaultCategories });
}

export function openPreferences() {
  window.dispatchEvent(new CustomEvent(OPEN_PREFERENCES_EVENT));
}
