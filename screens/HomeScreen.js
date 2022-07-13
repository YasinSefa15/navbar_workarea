import {Button, Text, View} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';



const HomeScreen = ({route, navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Ionicons name='add-circle' size={42} color='green' />
            <Button
                title={"Go to dettails"}
                onPress={() => {
                    navigation.navigate('Detail', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}
            />
        </View>
    )
}

export default HomeScreen;