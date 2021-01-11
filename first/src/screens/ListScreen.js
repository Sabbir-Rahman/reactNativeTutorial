import React from 'react';
import {Text, View, StyleSheet, FlatList} from "react-native";


const ListScreen = () =>{
    const uni = [{name: "BUET", key: '1'},{name:"IUT",key: '2'},{name:"DU",key: '3'},{name:"KUET",key: '4'},{name:"RUET",key: '5'},{name:"CUET",key: '6'},{name:"MIST",key: '7'},
        {name:"SUST",key: '8'},{name:"BUP",key: '9'},{name:"BRAC",key: '10'},{name:"RU",key: '11'},]

    return(
        <View style={styles.viewStyle}>
            <FlatList
            data = {uni}

            renderItem = {function ({item}){
                return(<Text style={styles.textStyle} >{item.name}</Text>);
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:20,
        color:'#00fff9',
        marginVertical: 10,
        marginLeft:10,
    },
    viewStyle: {
        backgroundColor: "#000000",
        borderColor: '#ecfd00',
        borderWidth: 5,
    }
})

export default ListScreen;
