import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#cf89fd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        flexDirection: `column`,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#3b3b3b1f',
        alignSelf: 'center',
        borderWidth: 2,
        marginBottom: 60,
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: '#3b3b3b1f',
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
        flexDirection: 'column'
    }
});


export default styles