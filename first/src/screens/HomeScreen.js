import React from 'react';
import {Text, StyleSheet, Button, View} from "react-native";


const HomeScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Hello this is home screen</Text>

            <Button
                title="Go to List screen"
                onPress={
                    function () {
                        console.log("Button pressed")
                    }
                }
            />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 30,
            color: 'green'
        },
    }
)

export default HomeScreen;
