import React from 'react';
import {Text, StyleSheet} from "react-native";

const HomeScreen = ()=>{
    return(<Text style={styles.textStyle}>Hello this is home screen</Text>)
}

const styles = StyleSheet.create(
    {
        textStyle:{
          fontSize: 30,
          color: 'green'
        },
    }
)

export default HomeScreen;
