import {StatusBar, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from "../../../constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen({route, navigation}) {
    const {id, username, email, password} = route.params

    const  handleLogOut = async () => {
        console.log("Log Out Button Pressed!");
        try {
            await AsyncStorage.removeItem('lastLoggedIn');
            navigation.navigate("SignUpScreen")
        } catch (e) {
            console.error("Error In Log Out : ", e);
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#272727' barStyle='light-content'/>
            <Text style={styles.text}>USER ID : {id}</Text>
            <Text style={styles.text}>USERNAME : {username}</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogOut}>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20.0,
    },
    text: {
        color: COLORS.lightColor,
        fontSize: 20,
        fontWeight: "500",
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
});

export default HomeScreen;
