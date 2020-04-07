import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card'
const GameFinishedScreen = (props) => {
    return (
        <View style={styles.finishscreen}><Card style={{backgroundColor: '#c717fc'}}><Text style={{fontSize: 28, backgroundColor: '#c717fc', color: 'white'}}>Game Finished :)</Text><Text>{props.count}</Text></Card></View>
    )
}

const styles = StyleSheet.create({
    finishscreen: {
        marginTop: 8,
        fontSize: 28
    }
});

export default GameFinishedScreen;