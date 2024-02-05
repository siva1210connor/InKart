import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../Redux/counterSlice';

const Home = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://dummy.restapiexample.com/api/v1/employees',
      );
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 40}}>Fetch</Text>

      {data
        ? data.map((item, index) => {
            return (
              <View>
                <Text key={item.employee_name}>{item.employee_name}</Text>
              </View>
            );
          })
        : null}
    </View>
  );
};

export default Home;
