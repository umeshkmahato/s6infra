'use client';

import { useLanguageContext } from '@/context/LanguageContext';

export function useLanguage() {
  return useLanguageContext();
}

