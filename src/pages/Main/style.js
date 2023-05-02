import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232634'
  },

  Header: {
    flex: 0.1,
    backgroundColor: '#232634',
    flexDirection:'row'
  },


  containerBackground: {
    flex: 0.05,
    backgroundColor: '#232634',
    flexDirection:'row',
    borderBottomColor:'#C6D0F5',
    borderBottomWidth: 0.8,
    marginLeft: 15,
    marginRight: 15
  },

  containerNote: {
    flex: 1,
    backgroundColor: '#232634',
  
    marginLeft: 15,
    marginRight: 15
  },

  title: {
    fontSize: 40,
    fontWeight : 'bold',
    color : '#C6D0F5',
    marginLeft: 15,
    backgroundColor: '#232634',
    justifyContent:'flex-start',
    flex: 1
  },

  Menus: {
    fontSize: 40,
    fontWeight : 'bold',
    color : '#C6D0F5',
    marginLeft: 15,
    backgroundColor: '#232634',
    justifyContent:'flex-end',
    textAlign:'right',
    marginTop : 8,
    marginRight:15,
    flex: 1
    
  },
 
   Button: {
    borderRadius : 20,
    paddingVertical : 5,
    width : '15%',
    alignSelf: 'center',
    marginLeft : 3,
    marginRight: 5,
    marginBottom: 5,
    justifyContent : 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor : '#E5C890',
    borderWidth : 0.8
  },

  ButtonV: {
    borderRadius : 20,
    paddingVertical : 5,
    width : '15%',
    alignSelf: 'center',
    marginLeft : 3,
    marginRight: 5,
    marginBottom: 5,
    justifyContent : 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor : '#E78284',
    borderWidth : 0.8
  },

  ButtonG: {
    borderRadius : 20,
    paddingVertical : 5,
    width : '15%',
    alignSelf: 'center',
    marginLeft : 3,
    marginRight: 5,
    marginBottom: 5,
    justifyContent : 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor : '#81C8BE',
    borderWidth : 0.8
  },

  Note: {
    backgroundColor : '#303446',
    borderRadius : 20,
    width : '40%',
    marginTop: 10
   
  },

  textNote: {
    margin: 5,
    color: '#C6D0F5'
  },

  textNoteTitle: {
    fontSize: 20,
    marginLeft: 10,
    color: '#C6D0F5'
  },

  tag: {
   color: '#E5C890'
  },

  tag2: {
    color: '#E78284'
   },

   tag3: {
    color: '#81C8BE'
   },
   
  
  ButtonPlus: {
    borderRadius : 100,
    paddingVertical : 5,
    width : '17%',
    alignSelf: 'flex-end',
    marginLeft : 3,
    marginRight: 5,
    marginBottom: 10,
    justifyContent : 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor : '#C6D0F5',
    borderWidth : 0.8
  },
  
 
});