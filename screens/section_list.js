import { FlatList, SectionList, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function SectionListScreen() {

    const DummyArray = [
        {
            title: 'Pakistan',
            data: [{ key: 0, title: 'Lahore' }, { key: 1, title: 'Karachi' }]
        },
        {
            title: 'England',
            data: [{ key: 0, title: 'London' }, { key: 1, title: 'Birmingham' }]
        }
    ];

    const renderSection = ({ section }) => (
        <View style={styles.sectionItem}>
            <Text style={styles.title}>Section Title: {section.title}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>Title: {item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' />
            <SectionList
                sections={DummyArray}
                renderItem={renderItem}
                renderSectionHeader={renderSection}
                keyExtractor={(item, index) => item + index}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionItem: {
        backgroundColor: '#EF20VV',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: '80%',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: '80%',
    },
    title: {
        fontSize: 24,
    },
});
