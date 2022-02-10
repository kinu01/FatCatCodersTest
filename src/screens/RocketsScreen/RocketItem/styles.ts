import { StyleSheet, Dimensions } from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const imageHeight = Math.round(HEIGHT * 0.35);
const imageWidth = Math.round(WIDTH * 0.97);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 3,
    marginVertical: 6,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: imageWidth,
    height: imageHeight,
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
