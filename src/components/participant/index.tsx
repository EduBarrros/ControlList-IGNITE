import { style } from "./styles";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";

type Props = {
    name: string;
    onRemove: () => void;
}

export const Participant = ({name, onRemove}: Props) => {
    return (
        <View
            style={style.Container}
        >
            <Text
                style={style.Name}
            >
                {name}
            </Text>
            <TouchableOpacity
                style={style.Button}
                onPress={() => onRemove()}
            >
                <Text
                    style={style.ButtonText}
                >
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}