import React from 'react';
import PropTypes from 'prop-types';
import {View,Text,StyleSheet} from 'react-native';

// we can use destructing {name}
const Row = (props) => {

return(
  <View style={styles.rowContainer}>
    <Text style={styles.textStyle}>{props.name}</Text>
  </View>
);

}

Row.propTypes = {
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({

  rowContainer:{
    borderColor:'#ddd',
    borderBottomWidth: 1,
    padding:15,
  },
  textStyle:{
    fontSize:18,
  },
});
export default Row;
