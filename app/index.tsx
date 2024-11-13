import { Text, View, Button } from "react-native";
import { useState, useEffect } from "react";

var text_st = {
    width: 100,
    fontSize: 30,
    backgroundColor: 'lightgray',
    padding: 10, margin: 20
}

export default function Index() {
    const [val, setVal] = useState(0);

    useEffect(function () {
        console.log("this is side effect", val)
    }, []);

    return (
        <View style={{ alignItems: 'center' }} >
            <Text style={text_st}>{val}</Text>
            <Button title="Count Up" onPress={function(){setVal(val+1)}}/>
            <View style={{ height: 10 }}/>
            <Button title="Count Down" onPress={function(){setVal(val-1)}}/>
        </View>
    )
}
