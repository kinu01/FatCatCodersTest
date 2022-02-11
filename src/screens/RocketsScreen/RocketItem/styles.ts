import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../constants/theme';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const imageHeight = Math.floor(HEIGHT * 0.35);
const imageWidth = Math.floor(WIDTH * 0.97);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 3,
    marginVertical: 6,
    alignSelf: 'center',
    backgroundColor: COLORS.mainBackgroundColor,
  },
  rocketImage: {
    width: imageWidth,
    height: imageHeight,
    backgroundColor: COLORS.grey,
  },
  name: {
    paddingTop: 5,
    fontWeight: '600',
  },
  description: {
    paddingTop: 5,
    lineHeight: 20,
  },
});

export default styles;
