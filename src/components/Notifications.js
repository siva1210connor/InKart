import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CommonActions, StackActions} from '@react-navigation/routers';

const Notifications = ({navigation, route}) => {
  console.warn(route);
  const handleNavigate = () => {
    navigation.dispatch(StackActions.pop(1)
    )};
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30, color: 'blue'}}>{route.name}</Text>
      <Text style={{fontSize: 30, color: 'blue'}}>
        {route?.params?.user ?? ''}
      </Text>
      <TouchableOpacity
        onPress={handleNavigate}
        style={{
          backgroundColor: 'blue',
          padding: 15,
          margin: 10,
          borderRadius: 10,
        }}>
        <Text style={{color: '#fff'}}>Push WishList</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Notifications;
