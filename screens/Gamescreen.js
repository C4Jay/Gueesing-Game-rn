import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Alert} from 'react-native';
import Card from '../components/Card';
import GameFinishedScreen from './GamefinishedScreen';

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
    const [counter, setcounter] = useState(0)

    const currentlow = useRef(1)
    const currenthigh = useRef(100)


    

    const [GameFinished, setGameFinished] = useState(false)

    const nextGuessHandler = direc => {
        /* if(currentGuess == props.userChoice) {
            setGameFinished(true)
        } */
        setcounter(counter + 1)
        if((direc === 'lower' && currentGuess < props.userChoice) || 
        (direc === 'higher' && currentGuess > props.userChoice)){
            Alert.alert('Don`t cheat','Wrong input',[{text: 'sorry', style: 'cancel'}])
            return
        }
        if(direc === 'lower') {
            currenthigh.current = currentGuess
        } else {
            currentlow.current = currentGuess
        }
        const nextnumber = genRandomBetween(currentlow.current, currenthigh.current, currentGuess)
        setcurrentGuess(nextnumber)
        
    }

    let overscreen = null;

    if(currentGuess == props.userChoice) {
        overscreen = <View style={{marginTop: 8}}><GameFinishedScreen count={counter}></GameFinishedScreen></View>
    }

    return (
        <View style={styles.screen}>
            
            <View style={styles.numview}>
             <Text style={{fontSize: 28}} >{currentGuess}</Text>
             </View>
             <Card style={styles.btnview}>
                 <Button title="lower" onPress={nextGuessHandler.bind(this, 'lower')/* nextGuessHandler('lower') */}></Button>
                 <Button title="higher" onPress={nextGuessHandler.bind(this, 'higher')/* nextGuessHandler('higher') */}></Button>
             </Card>
             {overscreen}
             <Card style={styles.btnprev}> 
                <Button onPress={props.prev} title="back"></Button>
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
    },
    btnprev: {
        marginTop: 8,
        width: 129,
        borderRadius: 3,
        padding: 0
    },
    finishscreen: {
        marginTop: 8,
        fontSize: 28
    }
})

export default GameScreen;