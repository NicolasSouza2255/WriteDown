import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232634',
  },

  containerBackground: {
    flex: 0.1,
    backgroundColor: '#232634',
  },

  containerForm: {
    flex: 1,
    backgroundColor: '#303446',
    borderTopLeftRadius : 30,
    borderTopRightRadius : 30,
    paddingStart: '5%',
    paddingEnd: '5%',
  },

  title: {
    fontSize: 35,
    fontWeight : 'bold',
    marginTop: 28,
    marginBottom: 15,
    color : '#C6D0F5',
    alignSelf:'center',

  },

  containerNote: {
    flex: 0.5,
    paddingStart: '5%',
    paddingEnd: '5%',
    
  },

  Notetext: {
   fontSize: 20,
    color:'#C6D0F5',
    marginTop:10,
  },

  containerInput: {
    fontSize: 20,
    flex: 1
   },

  input: {
    fontSize: 20,
    color: '#C6D0F5',
    borderRadius : 10,
    borderBottomWidth:0.8,
    paddingBottom : 10,
    paddingTop : 10,
    marginTop: 15,
    marginLeft : 10,
    marginRight : 10,

    
    
   },

  
  ButtonProfile: {
    borderRadius : 100,
    paddingVertical : 20,
    paddingHorizontal : 20,
    width : '50%',
    alignSelf: 'center',
    justifyContent : 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor : '#C6D0F5',
    borderWidth : 0.8
  },

  ButtonPlus: {
    borderRadius : 100,
    paddingVertical : 5,
    marginTop:15,
    width : '17%',
    alignSelf: 'flex-end',
    marginLeft : 3,
    marginRight: 5,
    justifyContent : 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor : '#C6D0F5',
    borderWidth : 0.8
  },

});