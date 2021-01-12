import React from 'react';
import {Text, View, Image, StyleSheet} from "react-native";

const ImageDetail = (props) =>{
    let ImageSource = undefined;
    if(props.title=="Beach"){
        ImageSource = require("../../assets/beach.jpg")
    }
    else if(props.title == "Forrest"){
        ImageSource = require("../../assets/forrest.jpg")
    }
    else {
        ImageSource = require("../../assets/mountain.jpg")
    }
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.title}</Text>
            <Image
                source = {ImageSource} style={styles.imageStyle}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: "red",

    },
    imageStyle: {
        height: 100,
        width:200,
        margin: 5,
    },
    viewStyle: {
        borderColor: "green",
        width: 5,
        margin: 5,
    },
});

export default ImageDetail;
