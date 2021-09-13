import React from 'react'
import { View, Text,StyleSheet,Image } from 'react-native'

const Slide = () => {
    return (
        <View style={styles.row} >
            <View style={styles.v1} >
                <Image style={styles.img}  source={require('../../assets/img/video.png')} />
                <Text style={styles.txt}>Video</Text>
            </View>
            <View style={styles.v1} >
                <Image style={styles.img}  source={require('../../assets/img/image.png')} />
                <Text style={styles.txt}>Image</Text>
            </View>
            <View style={styles.v1} >
                <Image style={styles.img}  source={require('../../assets/img/music.png')} />
                <Text style={styles.txt}>Music</Text>
            </View>
            <View style={styles.v1} >
                <Image style={styles.img}  source={require('../../assets/img/archive.png')} />
                <Text style={styles.txt}>Archive</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    v1:{
        flex:1,alignItems:'center'
    },
    row:{
        height:120,
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        top:170
    },
    img:{
        height:70,
        width:70
    },
    txt:{

    }
})

export default Slide
