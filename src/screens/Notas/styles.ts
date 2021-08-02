import { firebasehosting } from "googleapis/build/src/apis/firebasehosting";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //justifyContent: 'center',
    },
    container1: {
        flex: 1,
        
        //backgroundColor: '#fff',
        //justifyContent: 'center',
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
    valorAti: {
        position: "absolute",
        width: 319,
        height: 30,
        left: 18,
        top: 170,
        color: "#039708",
        textAlign: "center",
        borderRadius: 15,
        padding: 5,
        backgroundColor: "#A5FFC3",
    },
    descriAti: {
        position: "absolute",
        width: 320,
        height: 65,
        left: 18,
        top: 90,
        color: "#0D5160",
        textAlign: "center",
        backgroundColor: "#C3E6FF",
        borderRadius: 15,
        paddingTop: 15,
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
