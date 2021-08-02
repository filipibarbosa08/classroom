import React from "react";
import { View, Text } from "react-native";
import { Appbar, BottomNavigation, Chip, List, Divider, Searchbar } from 'react-native-paper';

import { styles } from "./styles";

export function Alunos() {

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
    
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);

    type StatusState = 'checked' | 'unchecked';



    return (

        <><Appbar.Header>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="ALUNOS" />
        </Appbar.Header>

            <View style={styles.container}>
            <Searchbar style={styles.busca}
                placeholder="Nome do aluno"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
                <Chip icon="calendar-month-outline" style={styles.di} mode="outlined" selectedColor="#0F1B2B" onPress={() => { }}>
                    Data inicial
                </Chip>
                <Chip icon="calendar-month-outline" style={styles.df} mode="outlined" selectedColor="#0F1B2B" onPress={() => { }}>
                    Em atraso
                </Chip>
                <Chip icon="pin" style={styles.periodo} mode="outlined" selectedColor="#0F1B2B" onPress={() => { }}>
                    Não entregue
                </Chip>
                <Text></Text>
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
                </List.Section> 
            
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
         </View></>
    );
}