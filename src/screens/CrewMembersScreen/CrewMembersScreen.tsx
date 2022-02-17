import { localizeString } from 'i18n';
import React, { FC, useLayoutEffect, useCallback } from 'react';
import { ActivityIndicator, FlatList, ListRenderItem } from 'react-native';
import useFetchRequest from '../../hooks/useFetchRequest';
import { CrewMemberScreenProps } from '../../navigators/navigation/navigationScreenProps';
import { Crew } from '../../types/crewTypes';
import CrewMemberCard from './CrewMemberCard/CrewMemberCard';
import styles from './styles';

const CrewMembersScreen: FC<CrewMemberScreenProps> = ({ navigation }) => {
  const { list, loading } = useFetchRequest('/crew');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: localizeString('Crew_Members'),
    });
  }, [navigation]);

  const onCardPress = useCallback<(item: Crew) => void>(
    item => {
      navigation.navigate('CrewMemberDetail', { crewMember: item });
    },
    [navigation],
  );

  const renderItem: ListRenderItem<Crew> = ({ item }) => {
    return (
      <CrewMemberCard key={item.id} item={item} onCardPress={onCardPress} />
    );
  };

  if (loading) {
    return <ActivityIndicator style={styles.activityContainer} />;
  }

  return (
    <FlatList
      style={styles.container}
      data={list as Crew[]}
      keyExtractor={(item, index) => item?.id ?? index.toString()}
      renderItem={renderItem}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CrewMembersScreen;
