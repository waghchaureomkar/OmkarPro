import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

export default class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      calls: [
    {id:1, name: "Franky Wah - Aftertime",strg:"mp3 - 9.2mb",image:require('../../assets/img/music.png')},
    {id:2, name: "Annie's new car",strg:"jpg - 4.8mb",image:require('../../assets/img/image1.png')},
    {id:3, name: "Top secret archive",strg:"zip - 3.7gb",image:require('../../assets/img/archive.png')},
    {id:4, name: "On the top of the world",strg:"doc - 2.3mb",image:require('../../assets/img/video.png')},
    {id:5, name: "Fun times",strg:"mp4 - 1.5gb",image:require('../../assets/img/video.png')},
    ],
    };
  }

  renderItem = ({item}) => {

    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Image source={item.image} style={styles.pic} />
          <View style={{width:250}}>
            <View style={styles.nameContainer}>
              <Text style={styles.nameTxt}>{item.name}</Text>
            </View>
            <View style={styles.end}>
              <Text style={styles.stg}>{item.strg} </Text>
            </View>
          </View>
          <View>
            <Image source={require('../../assets/img/menu.png')} style={styles.menu} />
          </View>

        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return(
      <View style={{ flex: 1,top:160,width:'100%'}} >
        <FlatList 
          extraData={this.state}
          data={this.state.calls}
          keyExtractor = {(item) => {
            return item.id;
          }}
          renderItem={this.renderItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
      height:90,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dcdcdc',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  pic: {
    borderRadius: 10,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameTxt: {
    fontWeight: '600',
    color: '#222',
    fontSize: 17,

  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stg: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
  },
  menu:{
      height:20,
    right:15
  }
});