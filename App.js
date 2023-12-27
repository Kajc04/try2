import * as React from 'react';
import { Button, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { faBowlRice} from '@fortawesome/free-solid-svg-icons/faBowlRice'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet } from 'react-native-web';





function HomeScreen({ navigation, route }) {
  
 
 
  


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: '' }}>
     
  
  <View style={{ flex: 1, alignItems: 'center', justifyContent: '' }}>
       
       <Text style={{fontSize:20, marginTop: 30}}>Bonne degustation ! <FontAwesomeIcon icon={faBowlRice} /></Text>
      
        
      
       <View style={{width: 300,  marginTop: 200, border:'solid', borderTopLeftRadius:5, borderTopRightRadius:5, borderBottomLeftRadius:5,  borderBottomRightRadius:5,   overflow: 'hidden',   justifyContent: '',  paddingRight: 40,  paddingLeft: 40, backgroundColor:'white', color: 'grey'}}>
       <TouchableOpacity>
            <Text style={{fontSize:20  ,padding: 10,}}>Mon Badge  <FontAwesomeIcon size="20" icon={faCreditCard} /></Text>
      </TouchableOpacity>
      </View>
      
      <View style={{ width: 300, marginTop: 20, border:'solid', borderTopLeftRadius:5, borderTopRightRadius:5, borderBottomLeftRadius:5,  borderBottomRightRadius:5,   overflow: 'hidden',  justifyContent: '', padding: 10,paddingRight: 40,  paddingLeft: 40, backgroundColor:'white', color: 'grey'}}>
      <TouchableOpacity>
       <Text style={{fontSize:20}}>Menu du jour   <FontAwesomeIcon size='20' icon={faBowlRice}   /></Text>
       </TouchableOpacity>
      </View>
      
      <View style={{ width: 300,  marginTop: 20,   justifyContent: '', border:'solid', padding: 10, paddingRight: 80,  paddingLeft: 80, backgroundColor:'white', color: 'grey'}}>
      <TouchableOpacity>
       <Text style={{fontSize:20}}>Reglages   <FontAwesomeIcon size="20" icon={faWrench} /></Text>
       </TouchableOpacity>
      </View>

     





      

    </View>

    
    

    

      
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:  <Text><FontAwesomeIcon size='25' icon={faBowlRice}/>  O'sto</Text> ,
        headerStyle :{
          backgroundColor : 'white',
          
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => (
          <Button
            
            title={<FontAwesomeIcon size="20"icon={faUser} />}
            color="white"
            
          />
        ) 
      
      }
      } />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;