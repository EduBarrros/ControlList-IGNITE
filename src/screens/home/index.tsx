import { style } from "./styles";
import { View, Text, TextInput } from "react-native";


export const Home = () => {
    return (
        <View style={style.MainContainer}>
            <Text style={style.Title}>
                Nome do Evento
            </Text>
            <Text style={style.SubTitle}>
                Sexta, 4 de nomvembro de 2022
            </Text>
            <TextInput 
                style={style.Input}
                placeholder={'Nome do participante'}
                placeholderTextColor={'#6B6B6B'}
            />
        </View>
    )
}