import React, { FC, memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { Crew } from '../../../types/crewTypes';
import styles from './styles';

interface CrewMemberCardProps {
  item: Crew;
  onCardPress?: (item: Crew) => void;
}

const CrewMemberCard: FC<CrewMemberCardProps> = ({ item, onCardPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onCardPress?.(item)}
      style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.avatarContainer}>
          <FastImage
            style={styles.avatar}
            source={{
              uri: item?.image,
            }}
          />
        </View>
        <View style={styles.detailContainer}>
          <Text numberOfLines={1} style={styles.name}>
            {item.name}
          </Text>
          <Text style={styles.agency}>{item.agency}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(CrewMemberCard);
