import { localizeString } from 'i18n';
import { ToastOption } from './type';

const unknown: ToastOption = {
  type: 'error',
  position: 'top',
  text1: localizeString('Something_went_wrong'),
  text2: localizeString('An_unknwon_error_occrred_please_try_again_later'),
};

const network_failed: ToastOption = {
  type: 'error',
  position: 'bottom',
  text1: localizeString('No_Internet_Connection'),
};

const feed_failed: ToastOption = {
  type: 'error',
  position: 'bottom',
  text1: localizeString('Could_not_Refresh_Feed'),
  text2: '',
};

export default {
  unknown,
  network_failed,
  feed_failed,
  custom: (
    text1?: string,
    text2?: string,
    visibilityTime?: number,
  ): ToastOption => {
    return {
      type: 'error',
      position: 'top',
      text1,
      text2,
      visibilityTime: visibilityTime ?? 4000,
      text2NumberOfLines: 4,
    };
  },
};
