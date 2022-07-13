import {Button, Text, View} from "react-native";

function DetailsScreen({route, navigation}) {
    const { itemId, otherParam } = route.params;
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Text>item id : {JSON.stringify(itemId)}</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button title="Update Id" onPress={() => navigation.setParams({
                itemId : 42
            })}/>
            <Button title="Go back" onPress={() => navigation.goBack()}/>
        </View>
    );
}

export default DetailsScreen