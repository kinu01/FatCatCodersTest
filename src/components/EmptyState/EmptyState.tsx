import React from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import Button from '../Button/Button';
import styles from './styles';

interface EmptyStateProps {
  title: string;
  subtitle?: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  subtitleStyle?: StyleProp<TextStyle>;
  buttonTitle?: string;
  onButtonPress?: () => void;
}

const EmptyState = ({
  title,
  subtitle,
  containerStyle,
  titleStyle,
  subtitleStyle,
  buttonTitle,
  onButtonPress,
}: EmptyStateProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {!!subtitle && (
        <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
      )}
      {!!buttonTitle && (
        <Button
          // secondary
          containerStyle={styles.button}
          onPress={onButtonPress}>
          {buttonTitle}
        </Button>
      )}
    </View>
  );
};

export default EmptyState;
