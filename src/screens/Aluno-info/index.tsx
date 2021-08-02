import React from "react";
import { View, Text } from "react-native";
import { Appbar, BottomNavigation, Chip, List, Divider, Searchbar, Avatar } from 'react-native-paper';

import { styles } from "./styles";
import AvatarIcon from '../../assets/avatar.jpg';
export function AlunosInfo() {

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
            <Appbar.Content title="ALUNO " />
        </Appbar.Header>

            <View style={styles.container}>
                <Avatar.Image
                    style={styles.avatar}
                    source={AvatarIcon}
                    size={100}
                />
                <Text  style={styles.a1}>Joaquim Jorge Martins</Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text style={styles.a2}>RELATÓRIO</Text>
                <Text></Text>
                <List.Section>
                    <List.Item
                    left={props => <List.Icon {...props} icon="chart-line" />}
                    title="Nota total no período"
                    description= "50"
                    />
                    <Divider/>
                    <List.Item
                    left={props => <List.Icon {...props} icon="chart-line" />}
                    title="Total de atividades não entregues"
                    description="20"
                    />
                    <Divider/>
                    <List.Item
                    title="Atividades entregues sem anexo"
                    left={props => <List.Icon {...props} icon="chart-line" />}
                    description="10"
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