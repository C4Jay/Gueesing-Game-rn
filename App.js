import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Topic from './components/Topic';
import GamebeginScreen from './screens/GamebeginScreen';

export default function App() {
  return (
    <View style={styles.screen}>
    <Topic title="Guess"></Topic>
    <GamebeginScreen></GamebeginScreen>
    </View>
  );
}

const styles = StyleSheet.create({
 screen: {
   flex: 1
 }
});
