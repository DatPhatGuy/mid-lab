import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const useCustomHook = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const savedData = await AsyncStorage.getItem('@saved_data');
                if (savedData) {
                    setData(JSON.parse(savedData));
                } else {
                    const response = await axios.get(url);
                    const jsonData = response.data;
                    console.log('Fetched data from Axios:', jsonData); // Print fetched data from Axios
                    setData(jsonData);
                    await AsyncStorage.setItem('@saved_data', JSON.stringify(jsonData));
                }
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData().then(() => null);
    }, [url]);

    return { data };
};

export default useCustomHook;
