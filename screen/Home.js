import React from 'react'
import { View,Image,Text,StyleSheet,ScrollView,TextInput } from 'react-native'
import ProgressBar from './component/Progress'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Files from './component/Files';
import Folders from './component/Folders';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FILES" component={Files} />
      <Tab.Screen name="FOLDERS" component={Folders} />
    </Tab.Navigator>
  );
}


const Home = () => {

    function mainHome(){
        return (
            <View style={{width:'100%',height:800,backgroundColor:'#4274eb',...styles.cen}}>
                    <Image source={require('../assets/img/shape1.png')} style={styles.img1} />
                    <View style={styles.v11} >
                        <Text  style={styles.t1}> Hello Jessie,</Text>
                        <Text style={styles.t2}>at the moment you have</Text>
                    </View>
                    <View style={styles.v12}>
                        <View style={{flex:1,}}>
                            <Text style={{color:'#fff',fontSize:24,height:33,width:97,fontWeight:'600'}}>32,5 GB</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={{color:'#d2d6e0',fontSize:18,height:25,width:122,fontWeight:'600',alignSelf:'center',top:4}}>of 100 GB free</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Image source={require('../assets/img/button1.png')} style={{right:0,position:'absolute',...styles.cen}} />
                        </View>                    
                    </View>
                    <View style={styles.v12}>
                        <ProgressBar />
                    </View>
                    <View style={styles.v2}>
                        <View style={styles.search}>
                            
                            <Image source={require('../assets/img/search.png')} style={{height:20,width:20}} />
                            <TextInput
                            style={{width:290,fontSize:20,left:15,color:'#969db6'}}
                            placeholder="Search"
                            />
                        </View>
                        <View style={styles.v21}>
                        {MyTabs()}
                        </View>
                    </View>
                </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#ffffff' }}>
                {mainHome()}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cen:{
        flex:1, alignItems: 'center', justifyContent: 'center' 
    },
    v11:{
        position:'absolute',
        top:40,
        height: 136,
        width: 375
    },
    v12:{
        flex:1, justifyContent: 'center' ,
        flexDirection:'row',
        position:'absolute',
        left:28,
        height:48,
        width:305,
        top:177,
    },
    v2:{
        backgroundColor: "#ffffff",
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        height: 552,
        width: '100%',
        top:160
    },
    img1:{
        tintColor:'#89aafa',
        position:'absolute',
        top:0,
        resizeMode:'cover',
        width:'100%'
    },
    t1:{
        position:'absolute',
        color: '#ffffff',
        height: 46,
        width: 205,
        fontSize:34,
        left:10,
        fontWeight:'600',
        top:45,
        textAlign:'left'
    },
    t2:{
        color:'#d2d6e0',
        height: 27,
        width: 224,
        fontSize:20,
        fontWeight:'600',
        top:90,
        left:20
    },
    search:{
        flexDirection:'row',
        backgroundColor:'#e1e3ea',
        borderRadius:40,
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:20,
        marginTop:25,
        height:50,
        width:350,
        left:20,
        justifyContent:'center'
    },
    v21:{
        justifyContent: 'space-around' ,
        flexDirection:'row',
        width:'100%',
        height:70,
        backgroundColor:'#fff',
        flex:1
    }

});


export default Home
