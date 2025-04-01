import { StyleSheet, View, Text, Button, ActivityIndicator, Alert } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  
  const [buttonActivated, setButtonActivated] = useState(true)
  const [response, setResponse] = useState<{currentDateTime: string, platform: string} | undefined>();

  let haha: string;

  const onClick = () => {
    if(buttonActivated === false){
      return;
    }
  
    setButtonActivated(false);
  
    const currentDateTime = new Date();
    try{
      fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          currentDateTime: currentDateTime.toLocaleString(),
          platform: window.navigator.platform
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(r => r.json()).then(d => setResponse(d.json));

      console.log("Request sent!");
    }
    catch(e){
    console.error(e);

      let errorMessage = "Failed to send request. ";
      if (e instanceof Error){
        errorMessage += "Error message: " + e.message;
      }
      console.log(errorMessage);
  
      Alert.alert("Sorry, something went wrong", "Failed to send the request.", [
        {
          text: "Alright"
        }
      ])
    }
  
    setButtonActivated(true);
  }



  return (
    <View style={styles.button}>
      <Button title='Send request' onPress={onClick}/>
      {buttonActivated === false && <ActivityIndicator/>}
      {response?.currentDateTime !== "" && <Text style={{color: "white"}}>Time: {response?.currentDateTime}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 100,
  }
});