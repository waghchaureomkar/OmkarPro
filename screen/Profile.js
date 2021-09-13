import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ProgressBar from './component/Progress'
import SwitchB from './component/SwitchB'

const Profile = () => {
    return (
        <View style={{ 
            flex: 1, alignItems: 'center', justifyContent: 'flex-start' ,
            backgroundColor:'#ffffff'
        }}>
            <Image source={require('../assets/img/shape1.png')} 
                style={{position:'absolute', top:0,resizeMode:'cover',width:'100%' }} 
            />
            <View style={{height: 47,width: 338,position:'absolute',top:90}}>
                <Text style={styles.t1}>Profile</Text>
            </View>
            <View style={styles.v1}>
                <Image source={require('../assets/img/user.png') }/>
            </View>

            <View style={{...styles.v12,left:35}}>
                        <View style={{flex:1}} >
                            <Text style={{color:'#000',fontSize:25,height:33,width:150,fontWeight:'600'}}>32,5 GB Free</Text>
                        </View>
                        <View >
                            <Text style={{color:'#d2d6e0',fontSize:20,height:25,width:150,fontWeight:'600',alignSelf:'baseline',top:5}}>of 100 GB</Text>
                        </View>
                                          
                </View>
                <View style={{...styles.v12,left:35}}>
                    <ProgressBar />
                </View>
                <View style={styles.touch}>
                    <TouchableOpacity >
                        <Text style={styles.txt}>Increse storage space</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabs}>
                    <TouchableOpacity>
                    <View style={styles.tab}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.txt1}>Storage managment</Text>
                            <Image style={styles.arrow} source={require('../assets/img/arrow.png') } />
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={{...styles.tab,height:80}}>
                        <View style={{flexDirection:'row'}}>
                            <View >
                            <Text style={styles.txt1}>Device</Text>
                            <Text style={styles.txt2}>iPhone,Macbook,iPad</Text>
                            </View>
                            <View style={{left:10,top:10}}>
                                <Image style={styles.arrow} source={require('../assets/img/arrow.png') } />
                            </View>
    
                        </View>
                    </View>
                    </TouchableOpacity>
                    <View style={styles.tab}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.txt1}>Camera uploads</Text>
                            <View style={{left:150}}>
                            <SwitchB/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.tab}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.txt1}>Use data for file transfer</Text>
                        </View>
                        <View style={{left:100}}>
                            <SwitchB/>
                        </View>
                    </View>
                </View>
        </View>
        
            
    )
}

const styles = StyleSheet.create({
    tabs:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'flex-start',
        top:270
    },
    tab:{
        width:325,
        height:62,
        backgroundColor:'#f5f7fc',
        borderRadius:7,
        flexDirection:'row',
        margin:10
    },

    arrow:{
        left:150,
        top:22
    },
    txt1:{
        color:'#242833',
        fontSize:16,
        textAlign:'left',
        height:55,
        left:10,
        top:18,
        fontWeight:'400'
    },
    txt2:{
        color:'#999999',
        fontSize:14,
        textAlign:'left',
        height:55,
        left:10,
        fontWeight:'400',
        bottom:10
    },
    
    txt:{
        color:'#ff6aa2',
        fontSize:18,
        textAlign:'center',
        height:55,
        width:320,
        top:10
    },
    touch:{
        height:48,
        width:325,
        borderRadius:22,
        borderColor:'#ff6aa2',
        borderWidth:2,
        borderStyle:'solid',
        top:240
    },
    v12:{
        flex:1, justifyContent: 'center' ,
        flexDirection:'row',
        position:'absolute',
        left:28,
        height:48,
        width:305,
        top:275,
    },
    v1:{
        height:120,
        width:'100%',
        top:150,
        left:15
    },
    t1:{
        color: '#242833',
        fontSize:34,
        fontWeight:'600',
        height:46,
        width:200,
        left:10
    },
});

export default Profile
