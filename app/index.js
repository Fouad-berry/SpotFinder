import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TabNavigation from "./Navigations/TabNavigation";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { UserLocationContext } from "./Context/UserLocationContext";

export default function App() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
            setErrorMsg('Acess denied , please contact your operator');
            return;
            }
    
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);
    
    return (
        <View style={styles.container}>
            <UserLocationContext.Provider 
            value={{location,setLocation}}>
                <TabNavigation/>
            </UserLocationContext.Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
