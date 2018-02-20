import React,{Component} from 'react';
import {ListView,StyleSheet} from 'react-native';
import Row from './Row'

class ListDemoList extends Component {

constructor(props) {
  super(props);

/* rowHasChanged is basically called for each data source rows entry each time you change
 that data source rows, then only the rows that get changed are re-render
  (when rowHasChanged returned true). */

  const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
  this.state = {
    myList: ds.cloneWithRows([
    {name:'Ankit',profession:'iOS Developer'},
    {name:'Ankur',profession:'React Developer'},
    {name:'Tikku',profession:'Android Developer'}])
  }
}

  render() {
    return(
      <ListView
        style={styles.container}
        dataSource={this.state.myList}
        renderRow={(data) => <Row {...data}/>} // Spread Attributes
      />
    );
  }
}

const styles = StyleSheet.create({

container:{
  flex:1,
  marginTop:20,
},
});

export default ListDemoList;
