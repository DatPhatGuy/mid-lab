import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import useCustomHook from "../services/my_custom_hook";

const HomeScreen = () => {
    const API_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    const { data } = useCustomHook(API_URL);

    const renderData = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>{item.code}</Text>
            <Text style={styles.itemText}>{`Rate: ${item.rate}`}</Text>
            <Text style={styles.itemText}>{`Description: ${item.description}`}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            {data ? (
                <FlatList
                    data={Object.values(data.bpi)}
                    renderItem={renderData}
                    keyExtractor={(item) => item.code}
                />
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize: 20,
        marginBottom: 20,
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    itemText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
