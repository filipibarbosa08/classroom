import React from "react";
import { View, Text } from "react-native";
import { Appbar, BottomNavigation, Chip, List, Avatar, Divider } from 'react-native-paper';

import { styles } from "./styles";

export function Atividade() {

    const _goBack = () => console.log('Went back');

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


    const [first, setFirst] = React.useState<string>('bold');
    const [fruit, setFruit] = React.useState<string>('watermelon');
    const [status, setStatus] = React.useState<StatusState>('checked');

    type StatusState = 'checked' | 'unchecked';



    return (

        <><Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="ATIVIDADE" />
        </Appbar.Header>

            <View style={styles.container}>
                <List.Section>
                    <List.Accordion title="Todas as atividades" style={styles.listaAtvidades}>
                        <List.Item title="TCC 1" />
                        <List.Item title="TÓPICOS ESCIAIS I" />
                        <List.Item title="DESENVOLVIMENTO DE AMBIENTES MÓVEIS" />
                        <List.Item title="SEGURANÇA E AUDITÓRIA" />
                    </List.Accordion>
                </List.Section>
                <Chip style={styles.todos} mode="flat" selectedColor="#0F1B2B" onPress={() => { }}>
                    Todos
                </Chip>
                <Chip style={styles.atraso} mode="flat" selectedColor="#0F1B2B" onPress={() => { }}>
                    Em atraso
                </Chip>
                <Chip style={styles.naoEntregue} mode="flat" selectedColor="#0F1B2B" onPress={() => { }}>
                    Não entregue
                </Chip>
                <Chip style={styles.editado} mode="flat" selectedColor="#0F1B2B" onPress={() => { }}>
                    Editados
                </Chip>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <List.Section>
                    <List.Item
                    left={props => <List.Icon {...props} icon="account-circle-outline" />}
                    title="Keanu Reeves"
                    />
                    <Divider/>
                    <List.Item
                    left={props => <List.Icon {...props} icon="account-circle-outline" />}
                    title="Halle Berry"
                    />
                    <Divider/>
                    <List.Item
                    title="Laurence Fishburne"
                    left={props => <List.Icon {...props} icon="account-circle-outline" />}
                    />
                    <Divider/>
                    <List.Item
                    title="Mark Dacascos"
                    left={props => <List.Icon {...props} icon="account-circle-outline" />}
                    />
                    <Divider/>
                    <List.Item
                    title="Asia Kate Dillon"
                    left={props => <List.Icon {...props} icon="account-circle-outline" />}
                    />
                    <Divider/>
                    <List.Item
                    title="Lance Reddick"
                    left={props => <List.Icon {...props} icon="account-circle-outline" />}
                    />
                </List.Section> 
       
         </View></>
    );
}