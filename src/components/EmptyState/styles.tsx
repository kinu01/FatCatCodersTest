import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.mainBackgroundColor,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    paddingVertical: 7,
    fontSize: SIZES.fontSize3,
    fontWeight: 'bold',
    color: COLORS.primaryDarkColor,
    paddingHorizontal: SIZES.fontSize3,
  },
  subtitle: {
    textAlign: 'center',
    paddingVertical: 7,
    fontSize: SIZES.fontSize4,
    fontWeight: '400',
    color: COLORS.mainSubTextColor,
    paddingHorizontal: SIZES.fontSize2,
  },
  button: {
    marginTop: 15,
  },
});

export default styles;
