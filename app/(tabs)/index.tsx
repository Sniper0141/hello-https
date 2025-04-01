import { Image, StyleSheet, Platform, View, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Button title='Send request' onPress={() => alert('button klicked!')}></Button>
    </View>
  );
}

function onClick(){
  fetch("https://httpbin.org/post", {
    method: "POST",
    body: "Hello HTTPS World!!!",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
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
