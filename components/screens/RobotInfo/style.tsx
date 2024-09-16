import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    flexGrow: 1,
  },
  textContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  robotDescription: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
  },
  imageWithButtonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 20,
    position: 'absolute',
    bottom: 120, // Moves the nav buttons up/down
  },
  icon: {
    padding: 20, // Change size of chevron nav buttons
    fontSize: 32,
    color: '#3498db',
  },
});
