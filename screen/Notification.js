import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'

const Notification = () => {
    return (
        <View style={{ 
            flex: 1, alignItems: 'center', justifyContent: 'center' ,
            backgroundColor:'#ffffff'
        }}>
            <Image source={require('../assets/img/shape1.png')} 
                style={{position:'absolute', top:0,resizeMode:'cover',width:'100%' }} 
            />
            <View style={{height: 47,width: 338,position:'absolute',top:90}}>
                <Text style={styles.t1}>Notifications</Text>
            </View>
            
            <View style={{height: 383,width: 305,alignItems:'center',justifyContent:'center'}} >
                <Image source={require('../assets/img/illustration.png')} 
                style={styles.ill }/>
                <View style={{top:36,alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.t2}>No notifcations yet</Text>
                    <Text style={styles.t3}>Here you will see the external changes in your shared folders, tags from your peers and other updates</Text>
                </View>
            </View>
            
            </View>
    )
}

const styles = StyleSheet.create({
    ill: {
        position:'relative',
        alignContent: 'center',
        height: 246,
        width: 305
    },
    t1:{
        color: '#242833',
        fontSize:34,
        fontWeight:'600',
        height:46,
        width:200,
        left:10
    },
    t2:{
        color: '#242833',
        fontSize:20,
        fontWeight:'600',
        height:27,
        textAlign:'center',
        width:175,

    },
    t3:{
        top:8,
        color: '#242833',
        fontSize:15,
        textAlign:'center',
        lineHeight:22,
        width:276,
        fontWeight:'300',
        height:66
    }
  });
 

export default Notification
