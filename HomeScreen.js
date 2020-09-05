import React from 'react'
import { View, Text } from 'react-native'

import Header from './Header'

const HomeScreen = () => {
    return (
        <View>
            <Header titleText='Home' />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>
                Welcome to miCRM
                </Text>
            </View>
        </View>
    )
}

export default HomeScreen
