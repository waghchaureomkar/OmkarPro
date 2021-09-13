import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './screen/Tabs';
import Onboarding from './screen/Onboarding';


const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}
        initialRouteName={'Onboarding'} >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
