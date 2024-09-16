import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterContainer: {
    width: '100%',
    marginBottom: 20,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  listContainer: {
    width: '80%',
    height: 480,
  },
  robotRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 8,
    marginVertical: 8,
    padding: 10,
    height: 140, 
  },
  robotName: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    backgroundColor: '#226475',
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 3,
  },
  robotModel: {
    color: 'white',
    opacity: 0.8,
    fontSize: 16,
    backgroundColor: '#226475',
    paddingLeft: 3,
    paddingRight: 10,
    paddingBottom: 3,
    textAlign: 'left',
  },
  backgroundImage: {
    flex: 1, 
    borderRadius: 8,
  },
  imageShadow: {
    // backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    height: 130,
    width: 100,
    marginLeft:103,
    marginTop: 20,
    borderRadius: 60,
  },
  imageBox: {
    position: 'absolute',
  },
  filter: {
    color: 'black',
  },
  activeFilter: {
    color: 'blue',
  },
  imageCorrection: {
    alignSelf: 'center',
    verticalAlign: 'middle',
    marginRight: 30,
    marginBottom: 35,
    overflow: 'visible',
  }
});
