import {StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUpScreen({navigation}) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let userId = Math.floor(Date.now() / 1000);
    let user = null;

    useEffect(() => {
        const handleLoggedInUser = async () => {
            let lastUser = await AsyncStorage.getItem('lastLoggedIn');
            lastUser = JSON.parse(lastUser);
            if(lastUser){
                navigation.navigate("Home", lastUser)
            }
        }
        handleLoggedInUser().then(() => null);
    });
    const handleSignUp = async () => {

        console.log("Register Button Pressed!");
        let existingUsers = await AsyncStorage.getItem('users');
        existingUsers = JSON.parse(existingUsers);
        user = {
            id: userId,
            username: username,
            email: email,
            password: password,
        };
        try {
            if (existingUsers) {
                await AsyncStorage.setItem('users', JSON.stringify([...existingUsers, user]));
            } else {
                await AsyncStorage.setItem('users', JSON.stringify([user]));
            }
            console.log(existingUsers)
            await AsyncStorage.setItem('lastLoggedIn', JSON.stringify(user))
            navigation.navigate("Home", user)
        } catch (e) {
            console.error("Error On Sign Up: ", e);
        }
    };

    function navigateToLoginScreen() {
        navigation.replace("LoginScreen");
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#272727' barStyle='light-content'/>
            <Text style={styles.header}>Sign Up</Text>
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
                placeholder="Enter Username"
                placeholderTextColor='white'
            />
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
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Text style={styles.notRegisteredStyle}>
                    Already Registered?
                </Text>
                <TouchableOpacity onPress={navigateToLoginScreen}>
                    <Text style={styles.loginNow}>Login Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20.0,
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
    loginNow: {
        fontSize: 15.0,
        fontWeight: 'bold',
        color: '#456C8E',
        marginLeft: 5.0,
    },
});
