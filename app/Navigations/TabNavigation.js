import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Fav from '../Screens/Fav';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile';
import { Ionicons, FontAwesome } from '@expo/vector-icons';



export default function TabNavigation() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
        <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Search" component={Search} 
        options={{
          tabBarLabel: 'Rechercher',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Fav" component={Fav} 
        options={{
          tabBarLabel: 'Mes Favoris',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarLabel: 'Mon Profile',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-circle-o" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  )
}
