import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

    Container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    Name: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
        marginLeft: 16,
    },

    ButtonText: {
        fontSize: 24,
        color: '#fff'
    },

    Button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        justifyContent: 'center',
        alignItems: 'center',
    },

})