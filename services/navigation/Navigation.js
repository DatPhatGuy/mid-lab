import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import SplashScreen from "../../views/screens/splash_screen/SplashScreen";
import HomeScreen from "../../views/screens/home_screen/HomeScreen";
import {COLORS} from "../../constants/colors";
import LoginScreen from "../../views/screens/login_screen/LoginScreen";
import SignUpScreen from "../../views/screens/sign_up_screen/SignUpScreen";


const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Splash"
                    component={SplashScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="SignUpScreen"
                    component={SignUpScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: COLORS.secondaryColor,
                        },
                        headerTintColor: COLORS.lightColor,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}