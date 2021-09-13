import React from 'react'
import { View, Text,Image, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Onboarding = ({navigation}) => {
    return (
        <View>
            <ImageBackground source={require('../assets/img/onbording.png')}
            style={{resizeMode:'cover',height:'100%',width:'100%'}}>
            <Text style={{
                position:'absolute',
                bottom: 120,
                right: 30,
                color:'#4274eb',
                fontSize:24,
                textAlign:'right',
                height:66,
                width:209
            }}>Your cloud storage
            safe and sound</Text>
            <View style={{
                position:'absolute',
                bottom:50,
                right:40
            }}>
            <TouchableOpacity onPress={() => navigation.navigate("Tabs")}  >
                <Image source={require('../assets/img/button.png')}
                resizeMode='contain'/>
            </TouchableOpacity>
            </View>
            
            </ImageBackground>
        </View>
    )
}

export default Onboarding
