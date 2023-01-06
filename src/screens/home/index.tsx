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

    const Participants = ['Eduardo', 'Lucas', 'Pedro', 'Caio', 'Henrique', 'João']

    const HandleParticipantAdd = () => {
        if (Participants.includes('Eduardo')) {
            return Alert.alert("Atenção", "Já existe um participante com este nome.")
        }
    }

    const HandleParticipantRemove = (name: string) => {

        Alert.alert(
            "Atenção", 
            `Deseja remover o participante ${name}?`,
            [
                {
                    text: 'Sim',
                    onPress: () => Alert.alert('Deletado')
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
                Nome do Evento
            </Text>
            <Text style={style.SubTitle}>
                Sexta, 4 de nomvembro de 2022
            </Text>
            <View style={style.FormContainer}>
                <TextInput
                    style={style.Input}
                    placeholder={'Nome do participante'}
                    placeholderTextColor={'#6B6B6B'}
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
                data={Participants}
                keyExtractor={item => item}
                renderItem={({ item }: { item: string }) =>
                    <Participant
                        name={item}
                        onRemove={() => HandleParticipantRemove(item)}
                    />}
            />
        </View>
    )
}