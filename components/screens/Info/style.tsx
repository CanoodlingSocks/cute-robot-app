import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: 'white',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  foundingMotherText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  robotListHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  robotName: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});
