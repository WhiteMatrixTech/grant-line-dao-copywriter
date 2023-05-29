import home from './home'

export const resources = {
  en: {
    translation: {
      en: 'Eng',
      ...home.en,

    }
  },
  zh: {
    translation: {
      zh: '中文',
      ...home.zh,
    }
  }
};