import { useRef, useState } from 'react';
import { Alert, Platform } from 'react-native';
import {
  checkMultiple,
  requestMultiple,
  Permission,
  PERMISSIONS,
  RESULTS,
  openSettings,
} from 'react-native-permissions';
import { localizeString } from 'i18n';

type PermissionType = 'camera' | 'mic' | 'photos' | 'appTracking';

export default function usePermissions() {
  const [grantedPermissions, setGrantedPermissions] = useState<{
    camera: boolean;
    mic: boolean;
    photos: boolean;
  }>({
    camera: false,
    mic: false,
    photos: false,
  });

  const requiredPermissionsIOS = useRef<Permission[]>([
    PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY,
    PERMISSIONS.IOS.CAMERA,
    PERMISSIONS.IOS.MICROPHONE,
    PERMISSIONS.IOS.PHOTO_LIBRARY,
  ]).current;
  const requiredPermissionsAndroid = useRef<Permission[]>([
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.RECORD_AUDIO,
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
  ]).current;
  const permissionTypes = useRef<{
    [key: string]: PermissionType;
  }>({
    [PERMISSIONS.IOS.CAMERA]: 'camera',
    [PERMISSIONS.ANDROID.CAMERA]: 'camera',
    [PERMISSIONS.IOS.MICROPHONE]: 'mic',
    [PERMISSIONS.ANDROID.RECORD_AUDIO]: 'mic',
    [PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE]: 'photos',
    [PERMISSIONS.IOS.PHOTO_LIBRARY]: 'photos',
    [PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY]: 'appTracking',
  }).current;
  const hasRequestedOpenSettings = useRef<boolean>(false);

  const grantedAllPermissions = Object.values(grantedPermissions).every(
    isGranted => isGranted,
  );

  const checkPermissions = () => {
    if (Platform.OS === 'ios') {
      checkMultiplePermissions(requiredPermissionsIOS);
    } else {
      checkMultiplePermissions(requiredPermissionsAndroid);
    }
  };

  const checkMultiplePermissions = (requiredPermissions: Permission[]) => {
    checkMultiple(requiredPermissions).then(statuses => {
      requiredPermissions.forEach(requiredPermission => {
        readPermissionResponse(
          statuses[requiredPermission],
          permissionTypes[requiredPermission],
        );
      });
    });
  };

  const requestMultiplePermissions = (requiredPermissions: Permission[]) => {
    requestMultiple(requiredPermissions).then(statuses => {
      requiredPermissions.forEach(requiredPermission => {
        readPermissionResponse(
          statuses[requiredPermission],
          permissionTypes[requiredPermission],
        );
      });
    });
  };

  const readPermissionResponse = (result: string, type: PermissionType) => {
    const isRequestable = result === RESULTS.DENIED;
    const notRequestable = result === RESULTS.BLOCKED;
    const granted = result === RESULTS.GRANTED;

    if (isRequestable) {
      if (Platform.OS === 'ios') {
        requestMultiplePermissions(requiredPermissionsIOS);
        return;
      }
      requestMultiplePermissions(requiredPermissionsAndroid);
      return;
    }

    if (notRequestable) {
      requestOpenSettings(type);
      return;
    }

    if (granted) {
      setGrantedPermissions(prevGrantedPermissions => ({
        ...prevGrantedPermissions,
        [type]: true,
      }));
      return;
    }
  };

  const requestOpenSettings = (type: PermissionType) => {
    if (hasRequestedOpenSettings.current) {
      return;
    }
    Alert.alert(
      localizeString('Change_type_permission', { type: type }),
      localizeString('Do_you_want_to_change_permission_to_access_type', {
        type: type,
      }),
      [
        {
          text: localizeString('Cancel'),
          onPress: onDismissSettingsRequest,
          style: 'cancel',
        },
        {
          text: localizeString('Yes'),
          onPress: () => {
            openSettings().catch(() => {});
            onDismissSettingsRequest();
          },
        },
      ],
      { cancelable: false },
    );
    hasRequestedOpenSettings.current = true;
  };

  const onDismissSettingsRequest = () => {
    hasRequestedOpenSettings.current = false;
  };

  return { grantedAllPermissions, checkPermissions };
}
