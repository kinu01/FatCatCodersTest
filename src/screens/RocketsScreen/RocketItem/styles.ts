import { StyleSheet, Dimensions } from 'react-native';

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
    backgroundColor: '#fff',
  },
  rocketImage: {
    width: imageWidth,
    height: imageHeight,
    backgroundColor: '#f0f0f0',
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
