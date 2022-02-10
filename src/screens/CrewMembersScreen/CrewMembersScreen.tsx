import { localizeString } from 'i18n';
import React, { FC, useLayoutEffect } from 'react';
import { ActivityIndicator, FlatList, ListRenderItem } from 'react-native';
import { CrewMemberScreenProps } from '../../navigators/navigation/navigationScreenProps';
import { Crew } from '../../types/crewTypes';
import CrewMemberCard from './CrewMemberCard/CrewMemberCard';
import useCrewRequest from './hooks/useCrewRequest';
import styles from './styles';

const CrewMembersScreen: FC<CrewMemberScreenProps> = ({ navigation }) => {
  const { crew, loading } = useCrewRequest();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: localizeString('Crew_Members'),
    });
  }, [navigation]);

  const renderItem: ListRenderItem<Crew> = ({ item }) => {
    return <CrewMemberCard key={item.id} item={item} />;
  };

  if (loading) {
    return <ActivityIndicator style={styles.activityContainer} />;
  }

  return (
    <FlatList
      style={styles.container}
      data={crew}
      keyExtractor={(item, index) => item?.id ?? index.toString()}
      renderItem={renderItem}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CrewMembersScreen;
