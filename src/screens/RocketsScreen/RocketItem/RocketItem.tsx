import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Rocket } from '../../../types/rocketTypes';
import styles from './styles';

interface RocketItemProps {
  item: Rocket;
}

const RocketItem: FC<RocketItemProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      {!!item.flickr_images?.length && (
        <FastImage
          source={{
            uri: item.flickr_images[0],
          }}
          style={styles.rocketImage}
        />
      )}
      <Text style={styles.name}>{item.name}</Text>
      <Text numberOfLines={3} style={styles.description}>
        {item.description}
      </Text>
    </View>
  );
};

export default memo(RocketItem);
