import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback , Keyboard, Alert} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';


const GamebeginScreen = props => {

    const [valueInput, setvalueInput] = useState('')
    const [show, setshow] = useState(false)
    const [userconfirm, setuserconfirm] = useState(false)
    const [numPicked, setnumPicked] = useState('')

    const inputHandler = (number) => {
        setvalueInput(number.replace(/[^0-9]/g, ''))
    }

    const resetHandler = () => {
        setvalueInput('')
        setuserconfirm(false)
        setshow(false)
    }

    const confirmHandler = () => {
        if(isNaN(parseInt(valueInput)) || parseInt(valueInput) <= 0 || parseInt(valueInput) > 99) {
            Alert.alert(
                'Wrong Input',
                'Must be between 1 - 99',
                [{text: 'Okay', style: 'destructive', onPress:resetHandler}]
            )
            return
        }
        setshow(true)
        setuserconfirm(true)
        setnumPicked(parseInt(valueInput))
        setvalueInput('')
        Keyboard.dismiss()
    }

    let confirmedCheck;

    if(userconfirm){
        confirmedCheck = <View><Text>{valueInput}</Text></View>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.screen}>
       {/*  <Text style={styles.title}>the Game Screen</Text>
        */} 
        <Card style={styles.inputfield}>
           <Text>Pick a number</Text>
           <Input onChangeText={inputHandler} value={valueInput} style={styles.textfield} blurOnSubmit keyboardType="number-pad" maxLength={2} /> 
           <View style={styles.btnview}>
              <View style={styles.btn} ><Button onPress={resetHandler} title="reset" color="#c717fc" ></Button></View> 
              <View style={styles.btn} ><Button onPress={confirmHandler} title="confirm" color="#f7287e" ></Button></View>
           </View>
           </Card>
         {show ? 
         <View style={{marginTop: 10}}>
             <Card style={{alignItems: 'center'}}>
             <View style={{marginBottom: 15}}>
             <Text style={{fontSize: 15}}>Your number</Text>
             </View>
             <View style={styles.numview}>
             <Text style={{fontSize: 28}} >{numPicked}</Text>
             </View>
             <View style={styles.btn}>
             <Button onPress={() => {props.onStartGame(numPicked)}} color="yellowgreen" title="next"></Button>
             </View>
             </Card>
             </View> 
             : null}            
    
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputfield: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 19,
        padding: 15,
        borderRadius: 10


    },
    btnview: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        padding: 1
    },
    btn: {
        width: 100,
        marginTop: 8
    },
    textfield: {
        width: 50,
        textAlign: 'center',
        fontSize: 28
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
        

    }
})

export default GamebeginScreen;