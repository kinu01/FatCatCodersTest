import { localizeString } from 'i18n';
import React, { FC, useLayoutEffect, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import FastImage from 'react-native-fast-image';
import { EmptyState } from '../../components';
import usePermissions from '../../hooks/usePermissions';
import { CrewMemberDetailScreenProps } from '../../navigators/navigation/navigationScreenProps';
import {
  requiredPermissionsIOS,
  requiredPermissionsAndroid,
  defaultGrantedPermissions,
  allPermissions,
} from '../../types/permissionTypes';
import styles from './styles';

const CrewMemberDetailScreen: FC<CrewMemberDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const crewMember = route.params.crewMember;

  const { loading, grantedAllPermissions, checkPermissions } = usePermissions(
    requiredPermissionsIOS,
    requiredPermissionsAndroid,
    defaultGrantedPermissions,
    allPermissions,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: crewMember?.name,
    });
  }, [navigation, crewMember?.name]);

  useEffect(() => {
    checkPermissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <ActivityIndicator style={styles.activityContainer} />;
  }

  if (!grantedAllPermissions) {
    return (
      <EmptyState
        title={localizeString('Permission_required')}
        subtitle={localizeString(
          'Please_grant_the_required_permissions_to_see_crew_details',
        )}
        buttonTitle={localizeString('Grant_permission')}
        onButtonPress={checkPermissions}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <FastImage style={styles.avatar} source={{ uri: crewMember.image }} />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.agency}>{crewMember.agency}</Text>
        <Text style={styles.status}>{crewMember.status}</Text>
      </View>
    </View>
  );
};

export default CrewMemberDetailScreen;
