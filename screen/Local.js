import React from 'react'
import { View, Text,Image,StyleSheet,TextInput } from 'react-native'
import List from './component/List'
import Slide from './component/Slide'

const Local = () => {
    return (
        <View style={styles.v1}>
            
            <Image source={require('../assets/img/shape1.png')} 
                style={{position:'absolute', top:0,resizeMode:'cover',width:'100%' }} 
            />
            <View style={{height: 47,width: 338,position:'absolute',top:90}}>
                <Text style={styles.t1}>Local storage</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <View style={styles.search}>       
                    <Image source={require('../assets/img/search.png')} style={{height:20,width:20}} />
                    <TextInput
                    style={{width:290,fontSize:20,left:15,color:'#969db6'}}
                    placeholder="Search"
                    />
                </View>
            </View>
            <Slide />
            <List />
        </View>
            
    )
}

const styles = StyleSheet.create({
    t1:{
        color: '#242833',
        fontSize:34,
        fontWeight:'600',
        height:46,
        width:300,
        left:10
    },
    search:{
        position:'relative',
        flexDirection:'row',
        backgroundColor:'#e1e3ea',
        borderRadius:40,
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:20,
        height:50,
        width:350,
        justifyContent:'center',
        top:150
    },
    v1:{
        flex: 1, alignItems: 'center', justifyContent: 'flex-start',
        backgroundColor:'#ffffff'
    }
});

export default Local
