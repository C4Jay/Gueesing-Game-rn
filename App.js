import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Topic from './components/Topic';
import GamebeginScreen from './screens/GamebeginScreen';
import GameScreen from './screens/Gamescreen';

export default function App() {

  const [numUser, setnumUser] = useState();

  const beginGameHandler = (numPicked) => {
    setnumUser(numPicked);
  }

  const resetHandler = () => {
    setnumUser()
  }

  let content = <GamebeginScreen onStartGame={beginGameHandler}></GamebeginScreen>
  
  if(numUser) {
    content = <GameScreen prev={resetHandler} userChoice={numUser}></GameScreen>
  } 

  return (
    <View style={styles.screen}>
    <Topic title="Guess"></Topic>
    {content}
    </View>
  );
}

const styles = StyleSheet.create({
 screen: {
   flex: 1
 }
});
