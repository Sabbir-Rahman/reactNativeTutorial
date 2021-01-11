import React from 'react';
import {Text, View, Image, StyleSheet} from "react-native";

const ImageDetail = () =>{
    return(
        <View>
            <Text style={styles.textStyle}>Image </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        font: 30,
        color: "red",
    },
});

export default ImageDetail;
