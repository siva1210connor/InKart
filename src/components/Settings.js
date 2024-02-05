import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/routers';

const Settings = ({navigation, route}) => {
  const handleNavigate = () => {
    navigation.dispatch(CommonActions.goBack());
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30, color: 'blue'}}>{route.name}</Text>
      <TouchableOpacity
        onPress={handleNavigate}
        style={{
          backgroundColor: 'blue',
          padding: 15,
          margin: 10,
          borderRadius: 10,
        }}>
        <Text style={{color: '#fff'}}>go back to notifications</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
