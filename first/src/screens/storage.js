import React from 'react';
import {Text, View, Button, AsyncStorage} from "react-native";


const StorageScreen = () => {

    // let func = async ()=> {
    //     await function() {
    //         let i = 0;
    //         for (i=0;i< 1000000000; i++) {}
    //         alert("Done");
    //     };
    // };
    //
    // func();

    const setData = async (key, value)=> {
        try {
            await AsyncStorage.setItem(key,value);
            alert("Data Saved Successfully");
        } catch (error){
            alert(error);
        }
    };

    const getData = async (key)=>{
        try {
            const data = await AsyncStorage.getItem(key);
            if(data != null) {
                alert(data);
            }
            else {
                alert("No value");
            }
        } catch (error) {
            alert(error);
        }
    };

    const removedata = async ()=>{
        try {
            await AsyncStorage.removeItem(key);
            alert('Data removed successfully');
        } catch (error){
            alert(error)
        }
    }

    return (
      <View>
          <Text>Storage Screen</Text>
          <Button title="Save Data" onPress={function (){
              setData("name","Md Sabbir Rahman")
          }}/>

          <Button title="Retrieve Data" onPress={function (){
              getData("name");
          }}/>

          <Button title="Delete Data" onPress={function (){
              removedata("name");
          }}/>
      </View>

    );
};

export default StorageScreen;
