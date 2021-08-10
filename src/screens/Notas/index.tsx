import React from "react";
import { View, Text } from "react-native";
import { Appbar, BottomNavigation, Chip, List, Avatar, Divider } from 'react-native-paper';

import { styles } from "./styles";

export function Notas() {

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
            <Appbar.Content title="NOTAS" />
        </Appbar.Header>

            <View style={styles.container}>
                <List.Section>
                    <List.Accordion title="DESENVOLVIMENTO DE AMBIENTES MÓVEIS" style={styles.listaAtvidades}>
                        <List.Item title="TCC 1" />
                        <List.Item title="TÓPICOS ESCIAIS I" />
                        <List.Item title="DESENVOLVIMENTO DE AMBIENTES MÓVEIS" />
                        <List.Item title="SEGURANÇA E AUDITÓRIA" />
                    </List.Accordion>
                </List.Section>
                <Text style={styles.descriAti}> Construir uma aplicação mobile que utilize a 
                API do google classroom</Text>
                <Text style={styles.valorAti}> Valor da atividade 15,0</Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>                
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <List.Section>
                    <List.Item
                    left={props => <List.Icon {...props} icon="account-circle-outline" />}
                    title="Keanu Reeves"
                    description="8 pontos"
                    />
                    <Divider/>
                    <List.Item
                    left={props => <List.Icon {...props} icon="account-circle-outline" />}
                    title="Halle Berry"
                    description="7 pontos"
                    />
                    <Divider/>
                    <List.Item
                    title="Laurence Fishburne"
                    left={props => <List.Icon {...props} icon="account-circle-outline" />}
                    description="7 pontos"
                    />
                    <Divider/>
                    <List.Item
                    title="Mark Dacascos"
                    left={props => <List.Icon {...props} icon="account-circle-outline" />}
                    description="8 pontos"
                    />
                </List.Section> 
            
      
         </View></>
    );
}