import React from 'react';
import { ActivityIndicator, FlatList, ListRenderItem } from 'react-native';
import { Rocket } from '../../types/rocketTypes';
import useRocketsRequest from './hooks/useRocketsRequest';
import RocketItem from './RocketItem/RocketItem';
import styles from './styles';

const RocketsScreen = () => {
  const { rockets, loading } = useRocketsRequest();

  const renderItem: ListRenderItem<Rocket> = ({ item }) => {
    return <RocketItem key={item.id} item={item} />;
  };

  if (loading) {
    return <ActivityIndicator style={styles.activityContainer} />;
  }

  return (
    <FlatList
      style={styles.container}
      data={rockets}
      keyExtractor={(item, index) => item?.id ?? index.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default RocketsScreen;
