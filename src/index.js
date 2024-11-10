// Library Imports
import {StatusBar, View} from 'react-native';
import React from 'react';

// Local Imports
import AppNavigator from './navigation';
import {colors, styles} from './themes';

export default function index() {
  return (
    <View style={styles.flex}>
      <StatusBar backgroundColor={colors.primary} />
      <AppNavigator />
    </View>
  );
}
