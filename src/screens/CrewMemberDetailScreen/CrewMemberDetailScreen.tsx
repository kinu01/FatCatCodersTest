import React, { FC, useLayoutEffect, useEffect } from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import usePermissions from '../../hooks/usePermissions';
import { CrewMemberDetailScreenProps } from '../../navigators/navigation/navigationScreenProps';
import {
  requiredPermissionsIOS,
  requiredPermissionsAndroid,
  defaultGrantedPermissions,
  permissionTypes,
} from '../../types/permissionTypes';
import styles from './styles';

const CrewMemberDetailScreen: FC<CrewMemberDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const crewMember = route.params.crewMember;

  const { grantedAllPermissions, checkPermissions } = usePermissions(
    requiredPermissionsIOS,
    requiredPermissionsAndroid,
    defaultGrantedPermissions,
    permissionTypes,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: crewMember?.name,
    });
  }, [navigation, crewMember?.name]);

  useEffect(() => {
    checkPermissions();

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!grantedAllPermissions) {
    return <View style={styles.container} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <FastImage style={styles.avatar} source={{ uri: crewMember.image }} />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.agency}>{crewMember.agency}</Text>
        <Text style={styles.status}>{crewMember.status}</Text>
        {/* <Text style={styles.visitLink}>{'Visit wikipedia page'}</Text> */}
      </View>
    </View>
  );
};

export default CrewMemberDetailScreen;
