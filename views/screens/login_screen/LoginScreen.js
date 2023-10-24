import {StatusBar, Text, TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () =>  {
        console.log("Login Button Pressed!");
        try {
            let allUsers = await AsyncStorage.getItem('users');
            allUsers = JSON.parse(allUsers);
            const userFound = allUsers.find((element) => {
                return element.email === email;
            });
            if(userFound) {
                navigation.navigate("Home", userFound)
            } else {
                console.error("Wrong Credentials");
            }
        } catch (e) {
            console.error("Error On Login : ", e);
        }
    }

    function navigateToSignUpScreen() {
        navigation.replace("SignUpScreen");
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#272727' barStyle='light-content'/>
            <Text style={styles.header}>Login</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Enter Email"
                placeholderTextColor='white'
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Enter Password"
                placeholderTextColor='white'
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Text style={styles.notRegisteredStyle}>
                    Not Registered Yet?
                </Text>
                <TouchableOpacity onPress={navigateToSignUpScreen}>
                    <Text style={styles.registerNowStyle}>Register Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30.0,
        backgroundColor: '#272727',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 20.0,
        fontWeight: 'bold',
        marginBottom: 20.0,
        color: 'white',
    },
    input: {
        marginBottom: 10.0,
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius: 12.0,
        color: 'white',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#272727',
        padding: 10,
        width: '80%',
        borderRadius: 12.0,
        height: 50,
        marginTop: 20,
        borderColor: 'white',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    footer: {
        marginTop: 20.0,
        flexDirection: 'row',
    },
    notRegisteredStyle: {
        fontSize: 15.0,
        fontWeight: 'bold',
        color: 'grey',
    },
    registerNowStyle: {
        fontSize: 15.0,
        fontWeight: 'bold',
        color: '#456C8E',
        marginLeft: 5.0,
    },
});
