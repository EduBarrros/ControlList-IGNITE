import React from "react";
import { style } from "./styles";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert,
} from "react-native";
import { Participant } from "../../components/participant";

export const Home = () => {

    const [participants, setParticipants] = React.useState<string[]>([])
    const [name, setName] = React.useState('')

    const HandleParticipantAdd = () => {
        if (participants.includes(name)) {
            return Alert.alert("Atenção", "Já existe um participante com este nome.")
        }

        setParticipants(prevState => [...prevState, name])
        setName('')
    }

    const HandleParticipantRemove = (name: string) => {
        Alert.alert(
            "Atenção",
            `Deseja remover o participante ${name}?`,
            [
                {
                    text: 'Sim',
                    onPress: () => setParticipants(prevState => prevState.filter(item => item !== name))
                },
                {
                    text: 'Não',
                    style: 'cancel'
                }
            ]
        )
    }

    return (
        <View style={style.MainContainer}>
            <Text style={style.Title}>
                Aniversário do Eduardo
            </Text>
            <Text style={style.SubTitle}>
                Domingo, 15 de Outubro de 2023
            </Text>
            <View style={style.FormContainer}>
                <TextInput
                    style={style.Input}
                    placeholder={'Nome do participante'}
                    placeholderTextColor={'#6B6B6B'}
                    onChangeText={setName}
                    value={name}
                />
                <TouchableOpacity
                    style={style.Button}
                    onPress={() => HandleParticipantAdd()}
                >
                    <Text
                        style={style.ButtonText}
                    >
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }: { item: string }) =>
                    <Participant
                        name={item}
                        onRemove={() => HandleParticipantRemove(item)}
                    />}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => 
                <View style={style.EmptyContainer}>
                    <Text style={style.EmptyText}>
                        Não há participantes cadastrados ainda.
                    </Text>
                </View>
                }
            />
        </View>
    )
}