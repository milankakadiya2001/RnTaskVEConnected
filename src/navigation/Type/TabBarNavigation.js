import {Image, StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Local Imports
import {StackRoute, TabRoute} from '../NavigationRoutes';
import {StackNav, TabNav} from '../NavigationKeys';
import {colors, styles} from '../../themes';
import {getHeight, isAndroid, moderateScale} from '../../common/constants';
import strings from '../../i18n/strings';
import CText from '../../components/common/CText';
import images from '../../assets/images';

const TraceStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={TabNav.TraceTab}>
      <Stack.Screen name={TabNav.TraceTab} component={TabRoute.TraceTab} />
      <Stack.Screen
        name={StackNav.TraceVehicleScreen}
        component={StackRoute.TraceVehicleScreen}
      />
    </Stack.Navigator>
  );
};

export default function TabBarNavigation() {
  const Tab = createBottomTabNavigator();

  const TabText = memo(({icon, label, focused}) => (
    <View style={localStyle.tabViewContainer}>
      <Image source={icon} style={localStyle.tabIconStyle} />
      <CText
        style={styles.mt5}
        numberOfLines={1}
        color={focused ? colors.primary : colors.gray1}
        type={'S12'}>
        {label}
      </CText>
    </View>
  ));

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: localStyle.tabBarStyle,
        tabBarShowLabel: false,
      }}
      initialRouteName={StackNav.TraceStack}>
      <Tab.Screen
        name={TabNav.HomeTab}
        component={TabRoute.HomeTab}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              focused={focused}
              icon={images.homeIcon}
              label={strings.home}
            />
          ),
        }}
      />
      <Tab.Screen
        name={StackNav.TraceStack}
        component={TraceStack}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              focused={focused}
              icon={images.mapIcon}
              label={strings.trace}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.PlannerTab}
        component={TabRoute.PlannerTab}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              focused={focused}
              icon={images.calenderIcon}
              label={strings.planner}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.MoreTab}
        component={TabRoute.MoreTab}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              focused={focused}
              icon={images.starIcon}
              label={strings.more}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const localStyle = StyleSheet.create({
  tabBarStyle: {
    height: isAndroid ? getHeight(65) : getHeight(80),
    ...styles.ph20,
    borderTopWidth: 0,
    backgroundColor: colors.backgroundColor1,
  },
  tabViewContainer: {
    ...styles.center,
    ...styles.mt5,
  },
  tabIconStyle: {
    width: moderateScale(22),
    height: moderateScale(22),
  },
});
