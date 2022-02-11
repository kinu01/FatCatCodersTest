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
  avatarContainer: {
    width: '100%',
    height: '49%',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  detailContainer: {
    paddingLeft: 10,
    paddingTop: 10,
  },
  agency: {
    paddingTop: 5,
    fontSize: 18,
    fontWeight: '600',
  },
  status: {
    paddingTop: 5,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default styles;
