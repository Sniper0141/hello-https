import { Image, StyleSheet, Platform, View, Button } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  return (
    <View>
      <Button title='Send request' onPress={onClick}></Button>
      {buttonActivated === false && <Image src='./../../assets/loading.gif'/>}
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

const [buttonActivated, setButtonActivated] = useState(true)

function onClick(){
  if(buttonActivated === false){
    return;
  }

  setButtonActivated(false);

  const currentDateTime = Date.now();

  fetch("https://httpbin.org/post", {
    method: "POST",
    body: JSON.stringify({
      "currentDateTime": currentDateTime,
      "platform": window.navigator.platform
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });

  setButtonActivated(true);
}