import { Permission, PERMISSIONS } from 'react-native-permissions';

export type PermissionType = 'camera' | 'mic' | 'photos' | 'appTracking';
export type PermissionTypes = {
  [key: string]: PermissionType;
};

export const permissionTypes: PermissionTypes = {
  [PERMISSIONS.IOS.CAMERA]: 'camera',
  [PERMISSIONS.ANDROID.CAMERA]: 'camera',
  [PERMISSIONS.IOS.MICROPHONE]: 'mic',
  [PERMISSIONS.ANDROID.RECORD_AUDIO]: 'mic',
  [PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE]: 'photos',
  [PERMISSIONS.IOS.PHOTO_LIBRARY]: 'photos',
  [PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY]: 'appTracking',
};

export const requiredPermissionsIOS: Permission[] = [
  PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY,
  PERMISSIONS.IOS.CAMERA,
  PERMISSIONS.IOS.MICROPHONE,
  PERMISSIONS.IOS.PHOTO_LIBRARY,
];

export const requiredPermissionsAndroid: Permission[] = [
  PERMISSIONS.ANDROID.CAMERA,
  PERMISSIONS.ANDROID.RECORD_AUDIO,
  PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
];

export type GrantedPermissions = {
  [key in PermissionType]: boolean;
};

export const defaultGrantedPermissions: GrantedPermissions = {
  camera: false,
  mic: false,
  photos: false,
  appTracking: false,
};
