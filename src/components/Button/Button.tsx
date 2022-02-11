import React from 'react';
import {
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  onPress?: () => void;
  children?: JSX.Element | string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  secondary?: boolean;
  removeBorder?: boolean;
}

export default function Button({
  onPress,
  children,
  containerStyle,
  titleStyle,
  secondary = false,
  removeBorder = false,
  ...otherProps
}: ButtonProps) {
  const renderChildren = () => {
    if (typeof children === 'string') {
      return (
        <Text
          style={[styles.title, secondary && styles.secondarytitle, titleStyle]}
          {...otherProps}>
          {children}
        </Text>
      );
    } else {
      return children;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        styles.container,
        secondary && styles.secondaryContainer,
        removeBorder && styles.removeBorderContainer,
        containerStyle,
      ]}
      {...otherProps}>
      {renderChildren()}
    </TouchableOpacity>
  );
}
