import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../constants/theme';

const WIDTH = Dimensions.get('window').width;
const containerWidth = Math.floor(WIDTH * 0.5);
const cardWidth = Math.floor(containerWidth * 0.72);
const cardHeight = Math.floor(containerWidth * 0.88);

const styles = StyleSheet.create({
  container: {
    width: containerWidth,
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 3,
    marginVertical: 6,
  },
  cardContainer: {
    width: cardWidth,
    height: cardHeight,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#6e6e6e',
    overflow: 'hidden',
    marginLeft: 4,
    marginRight: 4,
  },
  avatarContainer: {
    flex: 1,
    backgroundColor: COLORS.grey,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  detailContainer: {
    flex: 0.45,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  name: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
    color: COLORS.mainDarkTextColor,
  },
  agency: {
    textAlign: 'center',
    fontSize: 12,
    color: COLORS.mainDarkTextColor,
  },
});

export default styles;
