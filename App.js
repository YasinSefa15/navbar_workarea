import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MainScreen from "./screens/mainScreen/MainScreen";
import {Profile} from "./screens/ProfileScreen";
import DiscoverScreen from "./screens/DiscoverScreen";

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="HomeTab" component={MainScreen} />
                <Tab.Screen name="DiscoveryTab" component={DiscoverScreen} />
                <Tab.Screen name="ProfileTab" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>

    );
}