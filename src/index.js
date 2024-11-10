// Library Imports
import {View} from 'react-native';
import React from 'react';

// Local Imports
import AppNavigator from './navigation';
import {styles} from './themes';

export default function index() {
  return (
    <View style={styles.flex}>
      <AppNavigator />
    </View>
  );
}
