import React, {useEffect, useState} from 'react'
import { SafeAreaView, SectionList, Text, View, StyleSheet, StatusBar, Alert } from 'react-native'

import Header from './Header'

function ContactList() {
    const [contacts, setContacts] = useState([])

    const createSectionArray = (data) => {
        let dataSections = []
        data.forEach(i => {
            const firstLetter = i.last_name.charAt(0).toUpperCase()
            const sectionIndex = dataSections.findIndex(i => i.title == firstLetter)
            if (sectionIndex != -1) {
                dataSections[sectionIndex].data.push(i)
            }
            else {
                dataSections.push({
                    'title': firstLetter,
                    'data': [i]
                })
            }
        })
        return dataSections.sort((a, b) => a.title > b.title)
    }

    useEffect(() => {
        try {
            fetch('http://127.0.0.1:5000/contact')
                .then(res => res.json())
                .then(json => createSectionArray(json.data))
                .then(data => setContacts(data))
                .catch(err => {
                    let json = require('./fakeData.json')
                    setContacts(createSectionArray(json.data))
                })
        }
        catch(err) {
            console.log('handling error')
            Alert.alert('handling error')
            let json = require('./fakeData.json')
            setContacts(createSectionArray(json))
        }
    }, [])

    const renderItem = ({item}) => (
        <View style={styles.item}>
            <Text key={item.id}>
                {item.first_name} {item.last_name}
            </Text>
        </View>
    )

    const renderSectionHeader = ({ section: { title } }) => (
        <View style={styles.sectionHeader}>
            <Text >
                {title}
            </Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <Header titleText='Contacts' />
            <SectionList
                sections={contacts}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                ItemSeparatorComponent={() => <View style={styles.separator}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        marginHorizontal: 10,
        paddingVertical: 5,
    },
    sectionHeader: {
        paddingHorizontal: 10,
        backgroundColor: '#ACB0BD',
        fontSize: 64,
        fontWeight: 'bold',
    },
    separator: {
        height: 0.5,
        width: '100%',
        backgroundColor: '#C8C8C8'
    },
});

export default ContactList
