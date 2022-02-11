import { Platform } from 'react-native';
import { Permission, PERMISSIONS } from 'react-native-permissions';

export type PermissionType = 'camera' | 'photos' | 'appTracking';

export const requiredPermissionsIOS: Permission[] = [
  PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY,
  PERMISSIONS.IOS.CAMERA,
  PERMISSIONS.IOS.PHOTO_LIBRARY,
];

export const requiredPermissionsAndroid: Permission[] = [
  PERMISSIONS.ANDROID.CAMERA,
  PERMISSIONS.ANDROID.RECORD_AUDIO,
  PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
];

export type AllPermissions = {
  [key: string]: PermissionType;
};

export const allPermissions: AllPermissions = {
  [PERMISSIONS.IOS.CAMERA]: 'camera',
  [PERMISSIONS.ANDROID.CAMERA]: 'camera',
  [PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE]: 'photos',
  [PERMISSIONS.IOS.PHOTO_LIBRARY]: 'photos',
  [PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY]: 'appTracking',
};

export type GrantedPermissions = {
  [key in PermissionType]?: boolean;
};

export const defaultGrantedPermissions: GrantedPermissions =
  Platform.select({
    ios: {
      camera: false,
      photos: false,
      appTracking: false,
    },
    android: {
      camera: false,
      photos: false,
    },
  }) ?? {};
