import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

// Local Imports
import {colors, styles} from '../../themes';
import {StackNav} from '../../navigation/NavigationKeys';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    asyncProcess();
  }, []);

  const asyncProcess = () => navigation.replace(StackNav.TabBarNavigation);

  return (
    <View style={localStyles.rootContainer}>
      <ActivityIndicator size={'large'} color={colors.primary} />
    </View>
  );
}

const localStyles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    ...styles.center,
  },
});
