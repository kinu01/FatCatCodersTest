import { useRef, useState } from 'react';
import { Alert, Platform } from 'react-native';
import {
  checkMultiple,
  requestMultiple,
  Permission,
  RESULTS,
  openSettings,
  PermissionStatus,
} from 'react-native-permissions';
import { localizeString } from 'i18n';
import {
  GrantedPermissions,
  PermissionType,
  AllPermissions,
} from '../types/permissionTypes';

export default function usePermissions(
  requiredPermissionsIOS: Permission[],
  requiredPermissionsAndroid: Permission[],
  defaultGrantedPermissions: GrantedPermissions,
  allPermissions: AllPermissions,
) {
  const [grantedPermissions, setGrantedPermissions] =
    useState<GrantedPermissions>(defaultGrantedPermissions);

  const hasRequestedOpenSettings = useRef<boolean>(false);

  const grantedAllPermissions = Object.values(grantedPermissions).every(
    isGranted => isGranted,
  );

  const readPermissionStatus = (
    requiredPermissions: Permission[],
    status: Record<Permission, PermissionStatus>,
  ) => {
    // For each required permissions requested or checked,
    // we handle the current permission status
    requiredPermissions.forEach(requiredPermission => {
      handlePermissionStatus(
        status[requiredPermission],
        allPermissions[requiredPermission],
      );
    });
  };

  // check required permissions
  const checkPermissions = async () => {
    const requiredPermissions =
      Platform.select({
        ios: requiredPermissionsIOS,
        android: requiredPermissionsAndroid,
      }) ?? [];

    try {
      // we check the status of the required permissions
      const status = await checkMultiple(requiredPermissions);

      // we read the statuses of the checked permissions
      readPermissionStatus(requiredPermissions, status);
    } catch (error) {
      console.warn(error);
      Alert.alert(
        localizeString('Error_occured_while_checking_permission_status'),
        localizeString('An_error_occured_while_checking_permission_status'),
      );
    }
  };

  const requestPermissions = async (requiredPermissions: Permission[]) => {
    try {
      // we request the required permissions
      const status = await requestMultiple(requiredPermissions);

      // we read the statuses of the requested permissions
      readPermissionStatus(requiredPermissions, status);
    } catch (error) {
      console.warn(error);
      Alert.alert(
        localizeString('Error_occured_while_requesting_permission'),
        localizeString('An_error_occured_while_requesting_permission'),
      );
    }
  };

  // we either request previously unrequested permission, or
  // we alert user to open settings to grant permission that can no longer be requested, or
  // we set granted permission type to true
  const handlePermissionStatus = (status: string, type: PermissionType) => {
    const isRequestable = status === RESULTS.DENIED;
    const notRequestable = status === RESULTS.BLOCKED;
    const granted = status === RESULTS.GRANTED;

    if (isRequestable) {
      const requiredPermissions =
        Platform.select({
          ios: requiredPermissionsIOS,
          android: requiredPermissionsAndroid,
        }) ?? [];

      requestPermissions(requiredPermissions);
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
