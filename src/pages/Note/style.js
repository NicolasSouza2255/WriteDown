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
    fontSize: 40,
    fontWeight : 'bold',
    marginTop: 28,
    marginBottom: 15,
    alignSelf: 'center',
    color : '#C6D0F5'
  },

   ButtonText: {
    fontSize: 40,
    color: '#C6D0F5',
    fontWeight : 'bold'
   },

   Button: {
    borderRadius : 50,
    paddingVertical : 8,
    width : '30%',
    justifyContent : 'center',
    alignItems: 'center'
  },

  Lock: {
    alignSelf: 'center',
    justifyContent : 'center',
    alignItems: 'center'
  },

  containerLock: {
    flex: 1,
    backgroundColor: '#303446',
    alignItems:'center'
  },


  containerLockRow: {
    flex: 0.33,
    backgroundColor: '#303446',
    flexDirection:'row',
    alignItems: 'center'
  },

});