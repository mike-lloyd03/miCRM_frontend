import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ContactList from './ContactList'
import HomeScreen from './HomeScreen'

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Tab.Navigator initialRouteName='Home'>
                    <Tab.Screen name='Home' component={HomeScreen} />
                    <Tab.Screen name='Contacts' component={ContactList} />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
