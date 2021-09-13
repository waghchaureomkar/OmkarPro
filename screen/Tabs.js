import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,View,Image} from 'react-native';
import Modalup from './component/Modalup';


import Home from './Home';
import Local from './Local';
import Notification from './Notification';
import Profile from './Profile';

const Tab = createBottomTabNavigator();


const Tabs = () => {

    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarShowLabel:false,
                headerShown:false,
                tabBarStyle:{
                    position:'absolute',
                    height:75,
                    backgroundColor: '#ffffff'
                }
            }}
            >
            
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center',justifyContent:'center',top:5}}>
                        <Image 
                            source={require('../assets/img/tabbar1.png')}
                            resizeMode='contain' 
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? '#4274eb' : '#959fba'
                            }}
                        />
                    </View>

                )
            }} />
            <Tab.Screen name="Local" component={Local}  options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center',justifyContent:'center',top:5}}>
                        <Image 
                            source={require('../assets/img/tabbar2.png') }
                            resizeMode='contain' 
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? '#4274eb' : '#959fba'
                            }}
                        />
                    </View>
                )
            }} />

            <Tab.Screen name="upload" component={Modalup} 
            options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center',justifyContent:'center',top:0}}>
                        <Image 
                            source={require('../assets/img/tabbar3.png')}
                            resizeMode='contain' 
                            style={{
                                width:50,
                                height:50,
                                tintColor: focused ? '#4274eb' : '#959fba'
                            }}
                        />
                    </View>
                )
            }} /> 
            
            <Tab.Screen name="Notification" component={Notification} options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center',justifyContent:'center',top:5}}>
                        <Image 
                            source={require('../assets/img/tabbar4.png') }
                            resizeMode='contain' 
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? '#4274eb' : '#959fba'
                            }}
                        />
                    </View>
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon:({focused}) => (
                    <View style={{alignItems:'center',justifyContent:'center',top:5}}>
                        <Image 
                            source={require('../assets/img/tabbar5.png') }
                            resizeMode='contain' 
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused ? '#4274eb' : '#959fba'
                            }}
                        />
                    </View>
                )
            }} />
        </Tab.Navigator>
     
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'AvenirNextFont'
  },
});

export default Tabs

