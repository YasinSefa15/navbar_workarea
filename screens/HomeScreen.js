import {Button, Text, View} from "react-native";

const HomeScreen = ({route, navigation}) => {

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>

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