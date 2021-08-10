import React from "react";
import { View, Text } from "react-native";
import { Appbar, TextInput, Button, BottomNavigation} from 'react-native-paper';

import { styles } from "./styles";

//<Appbar.BackAction onPress={_goBack} /> BOTÃO DE VOLTAR

export function Home() {

    const _goBack = () => console.log('Went back');
    const [text, setText] = React.useState('');

    const MusicRoute = () => (<Text></Text>);
    const AlbumsRoute = () => (<Text></Text>);
    const NotaRoute = () => (<Text></Text>);
    const RecentsRoute = () => (<Text></Text>);

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'music', title: 'Home', icon: 'home-outline' },
        { key: 'albums', title: 'Atividades', icon: 'notebook-outline' },
        { key: 'nota', title: 'Nota', icon: 'clipboard-text-outline' },
        { key: 'recents', title: 'Aluno', icon: 'account-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
        nota: NotaRoute,
    });


    return (

        <><Appbar.Header style={styles.titulo}>
            <Appbar.Content title="INÍCIO" />
        </Appbar.Header>

            <View style={styles.container}>
                <Text style={styles.user}> Olá</Text>
                <Text style={styles.userName}> Lucia Maria</Text>
                <TextInput style={styles.buscar} label="Buscar" value={text} onChangeText={text => setText(text)}
                    mode="outlined" outlineColor='#C4E6FF' left={<TextInput.Icon name="magnify" />}
                />
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text style={styles.turma}> Turmas</Text>
                <Button style={styles.butaoTurmas1} icon="chevron-down" mode="contained" onPress={() => console.log('Pressed')}>
                    <Text style={styles.badge}>Turma 1</Text>
                </Button>
                <Button style={styles.butaoTurmas2} icon="chevron-down" mode="contained" onPress={() => console.log('Pressed')}>
                    <Text style={styles.badge}>Turma 2</Text>
                </Button>
                <Button style={styles.butaoTurmas3} icon="chevron-down" mode="contained" onPress={() => console.log('Pressed')}>
                    <Text style={styles.badge}>Turma 3</Text>
                </Button>
                <Button style={styles.butaoTurmas4} icon="chevron-down" mode="contained" onPress={() => console.log('Pressed')}>
                    <Text style={styles.badge}>Turma 4</Text>
                </Button>

               

            </View></>

    );
}