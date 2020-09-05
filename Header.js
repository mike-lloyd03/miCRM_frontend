import React, {useEffect, useState} from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Header = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Text numberOfLines={1} style={styles.titleText}>
                    {props.titleText ? props.titleText : 'Header'}
                </Text>
            </View>
            <TouchableOpacity style={styles.rightIconButton}>
                <MaterialCommunityIconsIcon
                    name="dots-vertical"
                    style={styles.rightIcon}
                ></MaterialCommunityIconsIcon>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        flexDirection: "row",
        alignItems: "center",
        padding: 4,
        justifyContent: "space-between",
        shadowColor: "#111",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
        elevation: 3
    },
    textWrapper: {
        alignSelf: "flex-end",
        alignItems: 'center',
    },
    titleText: {
        fontSize: 18,
        color: "#FFFFFF",
        backgroundColor: "transparent",
        padding: 10,
        fontWeight: 'bold',
    },
    rightIcon: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24
    }
})

export default Header
