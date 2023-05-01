import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232634',
  },

  containerBackground: {
    flex: 0.53,
    backgroundColor: '#232634',
  },

  containerLogin: {
    flex: 0.47,
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


  input: {
    fontSize: 20,
    color: '#C6D0F5',
    backgroundColor: '#232634',
    borderRadius : 20,
    paddingBottom : 10,
    paddingTop : 10,
    marginTop: 15,
    marginLeft : 25,
    marginRight : 25
   },

  TextLinkF: {
    fontSize: 12,
    color: '#C6D0F5',
    marginTop:2,
    marginRight: 20,
    alignSelf:'flex-end',
    textDecorationLine:'underline'
   },
 
   ButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight : 'bold'
   },

   Button: {
    
    backgroundColor : '#A6D189',
    borderRadius : 50,
    paddingVertical : 8,
    width : '30%',
    alignSelf: 'center',
    marginTop: 20,
    justifyContent : 'center',
    alignItems: 'center'
  },

   TextLinkR: {
    fontSize: 12,
    color: '#C6D0F5',
    marginTop:10,
    alignSelf:'center',
    textDecorationLine:'underline'
   },
 
});