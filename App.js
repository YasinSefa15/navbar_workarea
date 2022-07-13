import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MainScreen from "./screens/mainScreen/MainScreen";
import {Profile} from "./screens/ProfileScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import colorPalette from "./colorPalette";

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused}) => {
                        let iconName;
                        const getColor = (focused) => {
                            return focused ? colorPalette[0] : colorPalette[1];
                        };
                        let color = 'gray';
                        if (route.name === 'HomeTab') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                            color = getColor(focused)
                        } else if (route.name === 'DiscoveryTab') {
                            iconName = focused
                                ? 'search'
                                : 'search-outline';
                            color = getColor(focused)
                        } else if (route.name === 'ProfileTab') {
                            iconName = focused
                                ? 'person'
                                : 'person-outline';
                            color = getColor(focused)
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={26} color={color}/>;
                    },
                    tabBarActiveTintColor: colorPalette[0],
                    tabBarInactiveTintColor: colorPalette[1],
                })}
            >
                <Tab.Screen name="HomeTab" component={MainScreen}/>
                <Tab.Screen name="DiscoveryTab" component={DiscoverScreen}/>
                <Tab.Screen
                    name="ProfileTab"
                    component={Profile}
                    options={{
                        tabBarBadgeStyle : {backgroundColor: 'blue'},
                        tabBarBadge: 3,
                        tabBarInactiveTintColor : colorPalette[1]
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}