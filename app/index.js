import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabNavigation from "./Navigations/TabNavigation";

export default function App() {
    return (
        <View style={styles.container}>
                <TabNavigation/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});