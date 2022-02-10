import { ToastPosition } from 'react-native-toast-message';

export interface ToastOption {
  type: string;
  position?: ToastPosition;
  text1?: string;
  text2?: string;
  visibilityTime?: number;
  text1NumberOfLines?: number;
  text2NumberOfLines?: number;
}
