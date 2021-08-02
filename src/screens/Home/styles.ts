import { firebasehosting } from "googleapis/build/src/apis/firebasehosting";
import { StyleSheet } from "react-native";
import { Colors } from "react-native-paper";

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        alignItems: 'center',
        //alignContent:'stretch',
        textAlignVertical:'center',
        alignSelf:"center",
        justifyContent: 'center',
    },
    user: {
        position: "relative",
        width: 162,
        height: 78,
        left: 28,
        top: 10,
        fontSize: 16,
        color: '#C4C4C4'
        //alignItems: 'center',
    },
    userName: {
        position: "absolute",
        width: 162,
        height: 78,
        left: 28,
        top: 25,        
        fontSize: 28,
        fontWeight: "bold",
    },
    buscar: {
        position: "absolute",
        width: 319,
        height: 55,
        left: 28,
        top: 60,
        borderRadius:15
    },
    turma: {
        position: "absolute",
        width: 70,
        height: 22,
        left: 28,
        top: 150,
        fontSize: 16,
    },
    butaoTurmas1: {
        position: "absolute",
        width: 319,
        height: 66,
        left: 30,
        top: 190,
        borderRadius: 15,
        backgroundColor: '#39A2DB',
        fontSize: 15,
        alignItems: "baseline",
        textDecorationColor: '#fff'
    },
    butaoTurmas2: {
        position: "absolute",
        width: 319,
        height: 66,
        left: 30,
        top: 270,
        borderRadius: 15,
        backgroundColor: '#39A2DB',
        fontSize: 15,
        alignItems: "baseline",
        textDecorationColor: '#fff'
    },
    butaoTurmas3: {
        position: "absolute",
        width: 319,
        height: 66,
        left: 30,
        top: 350,
        borderRadius: 15,
        backgroundColor: '#39A2DB',
        fontSize: 15,
        alignItems: "baseline",
        textDecorationColor: '#fff'
    },
    butaoTurmas4: {
        position: "absolute",
        width: 319,
        height: 66,
        left: 30,
        top: 430,
        borderRadius: 15,
        backgroundColor: '#39A2DB',
        fontSize: 15,
        alignContent:"flex-end",
        alignItems: "baseline"
    },
    badge: {
        position: "absolute",
        width: 25,
        height: 25,
        left: 283,
        top: 300,  
        fontSize: 15,
        color: "#fff"
    },

}); 