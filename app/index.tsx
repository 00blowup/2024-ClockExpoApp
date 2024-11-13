import { Text, View } from "react-native";
import { useState, useEffect } from "react";

var text_st = {
    fontSize: 20,
    padding: 10
}

export default function Index() {
    const [d, setD] = useState(new Date());

    useEffect(function () {
        setInterval(run_everysec, 1000);
    }, []);

    function run_everysec() {
        var now = new Date();
        setD(now);
    }

    return (
        <View style={{ alignItems: 'center' }} >
            <Text style={text_st}>{d.toString()}</Text>
        </View>
    )
}
