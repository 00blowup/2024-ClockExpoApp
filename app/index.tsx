import { Text, View } from "react-native";
import { useState, useEffect } from "react";

var text_st = {
    fontSize: 60,
    padding: 10
}

export default function Index() {
    const [hh, sethh] = useState("");
    const [mm, setmm] = useState("");
    const [ss, setss] = useState("");

    useEffect(function () {
        setInterval(run_everysec, 1000);
    }, []);

    function run_everysec() {
        var d = new Date();
        sethh(d.getHours());
        setmm(d.getMinutes());
        setss(d.getSeconds());
    }

    return (
        <View style={{ alignItems: 'center' }} >
            <Text style={text_st}>{hh}:{mm}:{ss}</Text>
        </View>
    )
}
