import React from 'react';
import {Text, StyleSheet, Button, View, Image} from "react-native";


const HomeScreen = (props) => {
    return (
        <View>
            <Text style={styles.textStyle}>Hello this is home screen</Text>

            <Button
                title="Go to List screen"
                onPress={
                    function () {
                        props.navigation.navigate("List");
                    }
                }
            />
            <Image
            source = {require("./../../assets/reactnativeIcon.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 30,
            color: 'green'
        },
    }
);

export default HomeScreen;
