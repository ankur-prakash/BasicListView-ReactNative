import React from 'react';
import PropTypes from 'prop-types';
import {View,Text,StyleSheet,Image} from 'react-native';

// we can use destructing {name}
const Row = (props) => {

return(
  <View style={styles.rowContainer}>
    <Image source={{uri:'https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg'}}
    style={{width:50,height:50}}
    />
    <View style={styles.textContainer}>
    <Text style={styles.textStyle}>{props.name}</Text>
    <Text style={styles.subTextStyle}>{props.profession}</Text>
  </View>
  </View>
);

}

Row.propTypes = {
  name: PropTypes.string.isRequired,
  profession: PropTypes.string,
};

const styles = StyleSheet.create({

  rowContainer:{
    borderColor:'#ddd',
    borderBottomWidth: 1,
    padding:8,
    flexDirection:'row'
  },
  textContainer:{
    marginLeft:8,
    justifyContent:'space-around'
  },

  textStyle:{
    fontSize:18,
  },
  subTextStyle:{
    fontSize:12,
    marginTop:8,
  },
});
export default Row;
