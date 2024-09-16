import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      backgroundColor: '#5ca596',
      padding: 10,
      marginBottom: 20,
      width: '100%',
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'white',
    },
    cardText: {
      fontSize: 14,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
  },
  editButtonContainer: {
    position: 'absolute',
    top: 400, 
    left: 150,
    zIndex: 1, 
  },
  scrollView: {
      flex: 1,
    marginTop: '60%',
    paddingLeft: 45,
    width: '100%',
    backgroundColor: '#5ca596',
    },
  textContainer: {
    position: 'absolute',
    top: 20, 
    left: 30, 
    zIndex: 1,
    padding: 5,
  },
  robotNicknameText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
    backgroundColor: '#226475',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  robotModelText: {
    color: 'white',
    opacity: 0.8,
    fontSize: 16,
    backgroundColor: '#226475',
    paddingLeft: 5,
    paddingRight: 10,
    paddingBottom: 5,
    textAlign: 'left',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '140%',
    top: 0,
  },
  imageCorrection: {
    marginLeft: 440,
    marginTop: 210,
    top: 60,
  },
  imageShadow: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    height: 30,
    width: 200,
    marginLeft: 95,
    marginTop: 385,
    borderRadius: 400,
  },
  imageBox: {
    position: 'absolute',
  },
  nicknameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  });
  