import HomeScreen from "../HomeScreen";
import DetailsScreen from "../DetailScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

const MainScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{title: "Titleee" , headerShown : false}}
            >
            </Stack.Screen>
            <Stack.Screen
                name="Detail"
                component={DetailsScreen}
                options={{headerShown : false}}
            />
        </Stack.Navigator>
    )
}

export default MainScreen