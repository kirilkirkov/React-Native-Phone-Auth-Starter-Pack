import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    maxWidth: 300,
    padding: 30
  },
  textInput: {
    height: 40,
    fontSize: 20,
    width: 100,
    borderColor: '#9b9b9b',
    borderBottomWidth: 1,
  },
  button: {
    padding: 5,
    color: '#ffffff',
    borderRadius: 5,
    backgroundColor: '#333'
  }
})

export default styles