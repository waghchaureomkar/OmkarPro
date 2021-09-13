import React,{useState} from 'react'
import { View,Button,Text,Modal,Image,TouchableOpacity } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const Modalup = ({navigation}) => {

    // const [show, setshow] = useState(true)

    // function goBack(){
    //     setshow(!show)
    // }

    return (
        
             <Modal transparent={true} visible={true}>
                <View style={{backgroundColor:'#000000aa',flex:1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{
                        backgroundColor:'#ffffff',position:'absolute',bottom:0,
                        height:220,width:'100%',borderTopRightRadius:140,borderTopLeftRadius:140
                        }}>
                        <View style={{top:150,left:155,position:'relative', width:'100%'}}>
                            <TouchableOpacity onPress={() => navigation.navigate("Home")}  >
                                <Image source={require('../../assets/img/cros.png')}
                                resizeMode='contain'/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                            <View><TouchableOpacity >
                                <Image source={require('../../assets/img/scan.png')}
                                resizeMode='contain'/></TouchableOpacity>
                                <Text style={{alignSelf:'center',color:'#8891aa'}}>Scan</Text>
                            </View>
                            <View style={{top:-30}}><TouchableOpacity >
                                <Image source={require('../../assets/img/photo.png')}
                                resizeMode='contain'/></TouchableOpacity>
                                <Text style={{alignSelf:'center',color:'#8891aa'}}>Photo</Text>
                            </View>
                            <View><TouchableOpacity >
                                <Image source={require('../../assets/img/upload.png')}
                                resizeMode='contain'/></TouchableOpacity>
                                <Text style={{alignSelf:'center',color:'#8891aa'}}>Upload</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
    )
}

export default Modalup
