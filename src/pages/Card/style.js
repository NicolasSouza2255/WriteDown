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
    flex: 0.9,
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
    flex: 1,
    paddingStart: '5%',
    paddingEnd: '5%',
    
  },

  Notetext: {
   fontSize: 20,
    color:'#C6D0F5',
    marginTop:10,
  },

  containerCard: {

    flex: 0.8,
    backgroundColor: '#232634',
    borderRadius : 30,
    paddingStart: '5%',
    paddingEnd: '5%',
    marginBottom: 20
  },
  containerCardNumber: {
    marginTop:'15%',
    paddingStart: '5%',
    paddingEnd: '5%',
    alignItems:'center',
  },

  containerCardOtherInfo: {
    paddingStart: '5%',
    paddingEnd: '5%',       
    marginTop:'5%',
    flexDirection:'row'
  },
  containerCardInfoName: {
    flex: 0.5,
    alignItems:'flex-start'
    
  },

  containerCardInfoDate: {
    flex: 0.5,
    alignItems:'flex-end'
    
  },
  containerInput: {
    fontSize: 20,
    color: '#C6D0F5',
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
    marginRight : 25,
    
    
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

});