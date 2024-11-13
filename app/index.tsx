import { Text, View } from "react-native";
import { useState, useEffect } from "react";

var text_st = {
    fontSize: 60,
    padding: 10,
    backgroundColor: "cornsilk"
}
var text_st_bold = {
    fontSize: 60,
    padding: 10,
    backgroundColor: "cornsilk",
    fontWeight: "bold"
}


export default function Index() {
    const [hh, sethh] = useState("");
    const [mm, setmm] = useState("");
    const [ss, setss] = useState("");
    const [ap, setap] = useState("");

    useEffect(function () {
        setInterval(run_everysec, 1000);
    }, []);

    function run_everysec() {
        var d = new Date();
        let hours = d.getHours();
        const minutes = d.getMinutes();
        const seconds = d.getSeconds();

        setap(hours<12 ? "am" : "pm");
        hours = hours % 12 || 12;

        var sStr = ss.toString();

        sethh(hours.toString().padStart(2, "0"));
        setmm(minutes.toString().padStart(2, "0"));
        setss(seconds.toString().padStart(2, "0"));

        if(ss < 10) {
            sStr = "0" + sStr;
            }

    }

    return (
        <View style={{ alignItems: 'center', flexDirection: 'row'}} >
            <Text style={text_st_bold}>{hh} : {mm}</Text>
            <Text style={text_st}>: {ss} {ap}</Text>
        </View>
    );


}
