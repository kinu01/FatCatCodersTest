import I18n from 'i18n-js';
import { I18nManager } from 'react-native';
import en from './en.json';

I18n.translations = { en };

// const currentLocale = I18n.currentLocale();
// export const isRTL = currentLocale.indexOf("ar") === 0;
// I18nManager.allowRTL(isRTL);

I18nManager.allowRTL(false);

I18n.locale = 'en'; //change it to any lang. eg: 'ar' for arabic and add ar.json file

export function localizeString(name: string, params = {}) {
  return I18n.t(name, params);
}

export default I18n;
