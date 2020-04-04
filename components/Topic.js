import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Topic = props => {
    return (
        <View style={styles.topic}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    topic: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#f7287e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        fontSize: 18
    }

})

export default Topic;