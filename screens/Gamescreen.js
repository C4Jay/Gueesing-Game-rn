import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';

const genRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude) {
        return genRandomBetween(min, max, exclude);
    } else {
        return rndNum
    }
}

const GameScreen = (props) => {
    const [currentGuess, setcurrentGuess] = useState(genRandomBetween(1, 100, props.userChoice)) 

    return (
        <View style={styles.screen}>
            
            <View style={styles.numview}>
             <Text style={{fontSize: 28}} >{currentGuess}</Text>
             </View>
             <Card style={styles.btnview}>
                 <Button title="lower" onPress={() => {}}></Button>
                 <Button title="higher" onPress={() => {}}></Button>
             </Card>
            
        </View>
    )

}

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    numview: {
        width:168,
        borderWidth: 3,
        borderColor: '#c717fc',
        justifyContent: 'center',
        textAlign: 'center',
        height: 68,
        borderRadius: 6,
        fontSize: 38,
        alignItems: 'center',
    },
    btnview: {
        marginTop: 15,
        width: 300,
        maxWidth: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default GameScreen;