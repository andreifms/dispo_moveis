import {SafeAreaView, Text, TextInput, View, Image, Button, StyleSheet} from "react-native";

function LoginScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/favicon.png')} />
                <Text style={styles.titulo}>ARBOVIDA</Text>
            </View>

            <View style={styles.formContainer}>
                <View>
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Insira seu email"
                            placeholderTextColor="#9CA3AF"
                        />
                    </View>
                </View>
                <View>
                    <View style={styles.senhaContainer}>
                        <Text style={styles.label}>Senha</Text>
                        <Text style={styles.forgotPassword}>
                            Esqueceu a senha?
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Insira a sua senha"
                            placeholderTextColor="#9CA3AF"
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Entrar" onPress={() => {}} />
                </View>
                <Text style={styles.cadastroText}>Ainda não possui uma conta? Clique aqui</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 25, // FALAR no final
    },
    logoContainer: {
        alignItems: 'center', // centralizar a imagem
    },
    titulo: {
        marginTop: 40,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 50,
        color: '#065F46',
    },
    formContainer: {
        marginTop: 40,
    },
    label: {
        fontWeight: '500',
        color: '#1F2937',
    },
    inputContainer: {
        marginTop: 8,
    },
    input: {
        paddingVertical: 10,
        color: '#1F2937',
        backgroundColor: '#ffffff',
        shadowColor: '#ef4343',
    },
    senhaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    forgotPassword: {
        fontWeight: '600',
        color: '#065F46',
    },
    buttonContainer: {
        marginTop: 12,
    },
    cadastroText: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 14,
        color: '#4F46E5',
    },
});

export default LoginScreen;
