import { firebasehosting } from "googleapis/build/src/apis/firebasehosting";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container1: {
        flex: 1,
    },
    listaAtvidades: {
        position: "absolute",
        left: 20,
        top: 10,
        borderRadius: 30,
        width: 319,
        height: 55,
        backgroundColor: '#C3E6FF',
    },
    nomeAti: {
        position: "absolute",
        width: 320,
        height: 30,
        left: 18,
        top: 85,
        textAlign: "center",
    },
    descriAti: {
        position: "absolute",
        width: 320,
        height: 65,
        left: 18,
        top: 118,
        textAlign: "center",
        backgroundColor: "#C3E6FF",
        borderRadius: 15,
        paddingTop: 15,
    },
    data: {
        position: "absolute",
        width: 320,
        height: 20,
        left: 18,
        top: 230,
        fontSize: 11,
        textAlign: "center",
        backgroundColor: "#C3E6FF",
        borderRadius: 15,
        padding: 2,
        alignContent: "center",
        alignItems: "center",
    },
    todos: {
        position: "absolute",
        width: 65,
        height: 30,
        left: 18,
        top: 190,
    },
    atraso: {
        position: "absolute",
        width: 90,
        height: 30,
        left: 75,
        top: 190,
    },
    naoEntregue: {
        position: "absolute",
        width: 112,
        height: 30,
        left: 155,
        top: 190,
    },
    editado: {
        position: "absolute",
        width: 80,
        height: 30,
        left: 260,
        top: 190,
    },
    a1: {
        position: "absolute",
        width: 65,
        height: 30,
        left: 18,
        top: 100,
        //backgroundColor:"#c7ff00"
    },
    a2: {
        position: "absolute",
        width: 65,
        height: 30,
        left: 18,
        top: 180,
        //backgroundColor:"#c7ff00"
    },
    a3: {
        position: "absolute",
        width: 65,
        height: 30,
        left: 18,
        top: 220,
        //backgroundColor:"#c7ff00"
    },
    a4: {
        position: "absolute",
        width: 65,
        height: 30,
        left: 18,
        top: 280,
        //backgroundColor:"#c7ff00"
    },
}); 
