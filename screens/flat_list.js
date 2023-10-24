import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from "react";
import axios from "axios";
import MyCustomHook from "../services/my_custom_hook";

export default function FlatListScreen() {

    const API_URL = 'https://dummy.restapiexample.com/api/v1/employees';

    //const [data, setData] = useState([]);

    const {data, myGetApiHook} = MyCustomHook();

    useEffect(() => {
        fetchData().then(() => null);
    }, []);

    const fetchData = async () => {
        try {
            await myGetApiHook(API_URL);
            // const response = await fetch(API_URL);
            // const json = await response.json();
            // setData(json.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>Name: {item.employee_name}</Text>
            <Text>Salary: {item.employee_salary}</Text>
            <Text>Age: {item.employee_age}</Text>
        </View>
    );


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff'/>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
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
