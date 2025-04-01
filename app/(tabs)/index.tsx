import { Image, StyleSheet, Platform, View, Button, ActivityIndicator, Alert } from 'react-native';
import { useState } from 'react';

let buttonActivated: boolean;
let setButtonActivated: Function;

export default function HomeScreen() {
  
  [buttonActivated, setButtonActivated] = useState(true)
  
  return (
    <View style={styles.button}>
      <Button title='Send request' onPress={onClick}/>
      {buttonActivated === false && <ActivityIndicator/>}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 100,
  }
});

function onClick(){
  if(buttonActivated === false){
    return;
  }

  setButtonActivated(false);

  const currentDateTime = Date.now();
  try{
    const response = fetch("https://httpbin.org/post", {
      method: "POST",
      body: JSON.stringify({
        "currentDateTime": currentDateTime,
        "platform": window.navigator.platform
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    console.log("Request sent!");
  }
  catch(e){
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