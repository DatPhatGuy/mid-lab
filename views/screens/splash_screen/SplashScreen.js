import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {useEffect} from "react";
import {COLORS} from "../../../constants/colors";

export default function SplashScreen({navigation}) {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("SignUpScreen");
        }, 2000); // 2000 milliseconds, adjust this value as needed

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#272727' barStyle='light-content'/>
            <Text style={styles.text}>Splash Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondaryColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: COLORS.lightColor,
        fontSize: 20,
        fontWeight: "500",
    },
});
