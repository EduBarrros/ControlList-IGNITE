import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

    MainContainer: {
        flex: 1,
        padding: 24,
        backgroundColor: '#131016'
    },

    Title: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 48
    },

    SubTitle: {
        color: '#6B6B6B',
        fontSize: 16,
    },

    Input: {
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        flex: 1,
        marginRight: 15
    },

    ButtonText: {
        fontSize: 24,
        color: '#fff'
    },

    Button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    FormContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 36,
        marginBottom: 42
    },

    EmptyContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    EmptyText: {
        color: '#fff'
    }

})