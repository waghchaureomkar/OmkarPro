import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'

const Folders = () => {
    return (
        <View style={{width:'100%',height:'100%',backgroundColor:'#fff',flex:1}}>
            <View style={styles.line}>
                <View style={styles.box}>
                    <View>
                        <Text style={styles.t1}>The Next big thing</Text>
                        <Text style={styles.t2}>12f - 21gb</Text>
                        <View style={styles.pic} ><Text style={{color:'#fff'}}>+7</Text></View>
                    </View>
                    <View>
                        <Image source={require('../../assets/img/menu.png')} style={styles.img} />
                    </View>
                </View>
                <View style={styles.box}>
                    <View>
                        <Text style={styles.t1}>Top Secret</Text>
                        <Text style={styles.t2}>7f - 523 mb</Text>
                        <View style={styles.pic} ><Text style={{color:'#fff'}}>+2</Text></View>
                    </View>
                    <View>
                        <Image source={require('../../assets/img/menu.png')} style={{...styles.img,top:-20}} />
                    </View>
                </View>
            </View>
            <View style={styles.line}>
                <View style={styles.box}>
                    <View>
                        <Text style={styles.t1}>Freebie project</Text>
                        <Text style={styles.t2}>3f - 192mb</Text>
                        <View style={styles.pic} ><Text style={{color:'#fff'}}>+6</Text></View>
                    </View>
                    <View>
                        <Image source={require('../../assets/img/menu.png')} style={styles.img} />
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={{alignItems:'flex-start'}}>
                        <Text style={styles.t1}>London Meetup</Text>
                        <Text style={styles.t2}>453f - 1.7gb</Text>
                        <View style={styles.pic} ><Text style={{color:'#fff'}}>+3</Text></View>
                    </View>
                    <View >
                        <Image source={require('../../assets/img/menu.png')} style={styles.img} />
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    line:{
        flexDirection:'row',
        width:'100%',height:180,
        justifyContent:'space-evenly',alignItems:'center'
    },
    box:{
        backgroundColor:'#e1e3ea',
        height:150,width:150,
        borderRadius:40
    },
    t1:{
        fontSize:18,
        color:'#545c78',
        width:100,
        left:20,top:15
    },
    t2:{
        fontSize:15,
        color:'#7881a1',
        width:100,
        left:20,top:20
    },
    pic:{
        position:'absolute',
        backgroundColor:'#697296',
        height:30,
        width:30,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        top:100,left:25
    },
    img:{
        left:120,height:20,top:-40
    }

});

export default Folders
