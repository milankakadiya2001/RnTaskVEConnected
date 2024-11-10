// Library Imports
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

// Local Imports
import CSafeAreaView from '../../components/common/CSafeAreaView';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import {DrawerIcon, NotificationIcon, SearchIcon} from '../../assets/svg';
import TraceHeaderComponent from '../../components/traceComponent/TraceHeaderComponent';
import {traceListData} from '../../api/constants';
import TraceVehicleDetailComponent from '../../components/traceComponent/TraceVehicleDetailComponent';

export default function TraceTab() {
  const iconScale = moderateScale(24);

  const renderItem = ({item}) => {
    return <TraceVehicleDetailComponent item={item} isList={true} />;
  };

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
      <FlatList
        data={traceListData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={localStyles.contentContainerStyle}
      />
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
  contentContainerStyle: {
    ...styles.ph20,
  },
});
