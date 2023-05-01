import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232634',
  },

  containerBackground: {
    flex: 0.6,
    backgroundColor: '#232634',
  },

  containerLogin: {
    flex: 0.4,
    backgroundColor: '#303446',
    borderTopLeftRadius : 30,
    borderTopRightRadius : 30,
    paddingStart: '5%',
    paddingEnd: '5%',
  },

  title: {
    fontSize: 40,
    fontWeight : 'bold',
    marginTop: 28,
    marginBottom: 15,
    alignSelf: 'center',
    color : '#C6D0F5'
  },

  text: {
    fontSize: 18,

    marginLeft: 24,
    color : '#C6D0F5'
  },

  input: {
    fontSize: 20,
    color: '#C6D0F5',
    backgroundColor: '#232634',
    borderRadius : 20,
    paddingBottom : 10,
    paddingTop : 10,
    marginTop: 20,
    marginLeft : 25,
    marginRight : 25
   },
 
   ButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight : 'bold'
   },

   Button: {
    backgroundColor : '#9e90e5',
    borderRadius : 50,
    paddingVertical : 8,
    width : '30%',
    alignSelf: 'center',
    marginTop: 20,
    justifyContent : 'center',
    alignItems: 'center'
  },

 
});