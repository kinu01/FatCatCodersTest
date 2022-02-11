import { StyleSheet, Dimensions } from 'react-native';
import { SIZES, COLORS } from '../../constants/theme';

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primaryDarkColor,
    height: 55,
    width: '60%',
    padding: 5,
    borderRadius: 8,
  },
  secondaryContainer: {
    backgroundColor: COLORS.mainLightTextColor,
    borderWidth: 1,
    borderColor: COLORS.primaryDarkColor,
  },
  removeBorderContainer: {
    borderWidth: 0,
  },
  title: {
    textAlign: 'center',
    color: COLORS.mainLightTextColor,
    fontSize: SIZES.fontSize4,
    fontWeight: '600',
  },
  secondarytitle: {
    color: COLORS.primaryDarkColor,
  },
});

export default styles;
