import React from 'react';
import {Text, View, StyleSheet, FlatList} from "react-native";


const ListScreen = () =>{
    const uni = [{name: "BUET",},{name:"IUT",},{name:"DU",},{name:"KUET",},{name:"RUET",},{name:"CUET",},{name:"MIST",},
        {name:"SUST",},{name:"BUP",},{name:"BRAC",},{name:"RU",},]

    return(
        <View style={styles.viewStyle}>
            <FlatList
            data = {uni}
            horizontal = {true}
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
