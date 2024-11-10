// Library Imports
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

// Local Imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import {DrawerIcon, NotificationIcon, SearchIcon} from '../../assets/svg';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import {colors, styles} from '../../themes';
import TraceHeaderComponent from '../../components/traceComponent/TraceHeaderComponent';
import TraceVehicleDetailComponent from '../../components/traceComponent/TraceVehicleDetailComponent';
import {traceListData} from '../../api/constants';

export default function TraceVehicleScreen({navigation, route}) {
  const item = route.params.item;
  const iconScale = moderateScale(24);

  return (
    <CSafeAreaView>
      <View style={localStyles.container}>
        <View style={styles.rowCenter}>
          <TouchableOpacity>
            <DrawerIcon width={iconScale} height={iconScale} />
          </TouchableOpacity>
          <CText
            numberOfLines={1}
            style={localStyles.titleText}
            color={colors.white}
            type={'B16'}>
            {strings.tracksphere}
          </CText>
        </View>
        <View style={localStyles.rightContainer}>
          <TouchableOpacity>
            <SearchIcon width={iconScale} height={iconScale} />
          </TouchableOpacity>
          <TouchableOpacity>
            <NotificationIcon width={iconScale} height={iconScale} />
          </TouchableOpacity>
        </View>
      </View>
      <TraceHeaderComponent />
      <ScrollView contentContainerStyle={styles.ph20}>
        <TraceVehicleDetailComponent
          item={traceListData[item.id - 1]}
          isList={false}
        />
      </ScrollView>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  container: {
    ...styles.rowSpaceBetween,
    ...styles.ph20,
    ...styles.pv15,
    backgroundColor: colors.primary,
  },
  titleText: {
    ...styles.ph15,
  },
  rightContainer: {
    ...styles.rowCenter,
    gap: moderateScale(15),
  },
});
