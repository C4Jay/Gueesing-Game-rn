import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';

const GamebeginScreen = props => {
    return (
        <View style={styles.screen}>
        <Text style={styles.title}>the Game Screen</Text>
        
        <Card style={styles.inputfield}>
           <Text>Pick a number</Text>
           <Input style={styles.textfield} /> 
           <View style={styles.btnview}>
              <View style={styles.btn} ><Button onPress={() => {}} title="reset" color="#c717fc" ></Button></View> 
              <View style={styles.btn} ><Button onPress={() => {}} title="confirm" color="#f7287e" ></Button></View>
           </View>
           </Card>           
        </View>
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
        width: 100
    },
    textfield: {
        
    }
})

export default GamebeginScreen;