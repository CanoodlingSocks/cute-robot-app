import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5ca596', 
    width: '100%',
    padding: 20,
    paddingTop: 45,
  },
  bannerText: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', 
  },
  profilePictureContainer: {
    marginLeft: 20,
  },
  defaultProfilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30, 
    backgroundColor: '#fff', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
  iconContainer: {
    alignItems: 'center', 
  }, 
  pressableButton: {
    height: 130,
    width: '90%',
    marginBottom: 15,
    aspectRatio: 2.5,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  greenOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonTextContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%', 
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'System',
  },
});
