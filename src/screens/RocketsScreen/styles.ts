import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    backgroundColor: COLORS.mainBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackgroundColor,
  },
});

export default styles;
