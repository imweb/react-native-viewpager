import { StyleSheet } from 'react-native';

const DOT_SIZE = 8;
const DOT_SPACE = 4;

export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'relative',
  },
  slide: {
    backgroundColor: 'transparent',
  },
  scrollview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  pagination: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationItem: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: 'rgba(255,255,255,0.4)',
    marginLeft: DOT_SPACE,
    marginRight: DOT_SPACE,
  },
  paginationItemCurrent: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
});

