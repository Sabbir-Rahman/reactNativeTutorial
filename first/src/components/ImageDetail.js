import React from 'react';
import {Text, View, Image, StyleSheet} from "react-native";

const ImageDetail = (props) =>{
    return(
        <View>
            <Text style={styles.textStyle}>{props.title}</Text>
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
