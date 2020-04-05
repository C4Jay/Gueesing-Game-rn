import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const GamebeginScreen = props => {
    return (
        <View style={styles.screen}>
        <Text style={styles.title}>the Game Screen</Text>
        
        <View style={styles.inputfield}>
           <Text>Pick a number</Text>
           <TextInput /> 
           <View style={styles.btnview}>
               <Button onPress={() => {}} title="reset" ></Button>
               <Button onPress={() => {}} title="confirm" ></Button>
           </View>
        </View>           
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
        

    }
})

export default GamebeginScreen;