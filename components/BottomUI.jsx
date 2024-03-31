import {Button,Text,View, SafeAreaView } from "react-native"

export const BottomUI = () => {
    return (
        <SafeAreaView edge={["bottom"]}>
        <View style={{
            padding: 20,
            backgroundColor: "#333",
        }}>
            <Text>Hello World</Text>
            <Button title='Press Me'/>
        </View>
        </SafeAreaView>
    )
}