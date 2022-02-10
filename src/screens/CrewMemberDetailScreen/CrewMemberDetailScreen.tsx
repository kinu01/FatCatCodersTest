import React, { FC, useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { CrewMemberDetailScreenProps } from '../../navigators/navigation/navigationScreenProps';

const CrewMemberDetailScreen: FC<CrewMemberDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const crewMember = route.params.crewMember;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: crewMember?.name,
    });
  }, [navigation, crewMember?.name]);

  return (
    <View>
      <Text>CrewMemberDetailScreen</Text>
    </View>
  );
};

export default CrewMemberDetailScreen;
