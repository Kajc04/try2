import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './home';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
 <Stack.Navigator>

    <Stack.Screen name='Home' component={Homescreen} />

 </Stack.Navigator>

   
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'auto'
  },

});


function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.push('Details', {
            name : 'Jhon',
            solde :'80600'
          })}
        />
      </View>
    );
  }
  
  function DetailsScreen({route,navigation}) {
    const {name, solde} = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text> {JSON.stringify(name)}</Text>
  
        <Text> {JSON.stringify(solde)}</Text>
  
        
        <Button title='Update ' onPress={() => navigation.setParams({
          name : 'Emma',
          solde : 68000
        })
        }/>
  
  
        
      </View>
    );
  }
  
