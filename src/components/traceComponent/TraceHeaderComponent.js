// Library Imports
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local Imports
import {colors, styles} from '../../themes';
import CText from '../common/CText';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constants';
import typography from '../../themes/typography';
import {FilterIcon, UpArrowIcon} from '../../assets/svg';

export default function TraceHeaderComponent() {
  const iconScale = moderateScale(24);
  const [search, setSearch] = useState('');
  const RenderDetail = ({val, title, valColor}) => {
    return (
      <View style={localStyles.detailContainer}>
        <CText type={'E24'} color={valColor}>
          {val}
        </CText>
        <CText type={'S14'} numberOfLines={1} color={colors.gray1}>
          {title}
        </CText>
      </View>
    );
  };

  return (
    <View style={localStyles.rootContainer}>
      <View style={localStyles.headerContainer}>
        <RenderDetail
          title={strings.running}
          val={'10'}
          valColor={colors.textColor2}
        />
        <RenderDetail
          title={strings.idle}
          val={'5'}
          valColor={colors.textColor3}
        />
        <RenderDetail
          title={strings.stopped}
          val={'3'}
          valColor={colors.textColor4}
        />
        <RenderDetail
          title={strings.offline}
          val={'2'}
          valColor={colors.textColor5}
        />
      </View>
      <View style={localStyles.searchRootContainer}>
        <View style={localStyles.searchContainer}>
          <TextInput
            placeholder={strings.searchVehicle}
            placeholderTextColor={colors.gray1}
            style={localStyles.searchInput}
            onChangeText={text => setSearch(text)}
            value={search}
          />
          <TouchableOpacity style={styles.ph10}>
            <Ionicons
              name={'chevron-down-outline'}
              color={colors.gray1}
              size={iconScale}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={localStyles.iconContainer}>
          <FilterIcon width={iconScale} height={iconScale} />
        </TouchableOpacity>
        <TouchableOpacity style={localStyles.iconContainer}>
          <UpArrowIcon width={iconScale} height={iconScale} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  rootContainer: {
    ...styles.ph20,
    ...styles.pt20,
  },
  headerContainer: {
    backgroundColor: colors.white,
    ...styles.ph15,
    ...styles.pv10,
    ...styles.rowSpaceBetween,
    borderRadius: moderateScale(12),
  },
  detailContainer: {
    ...styles.center,
    ...styles.ph5,
  },
  searchRootContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mv20,
  },
  searchContainer: {
    ...styles.rowSpaceBetween,
    width: '71%',
    backgroundColor: colors.white,
    borderWidth: moderateScale(1),
    borderColor: colors.borderColor1,
    borderRadius: moderateScale(12),
    height: moderateScale(40),
  },
  searchInput: {
    fontSize: moderateScale(16),
    ...typography.fontWeights.SemiBold,
    color: colors.gray1,
    ...styles.ph10,
    ...styles.pv5,
    width: '80%',
  },
  iconContainer: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(12),
    ...styles.center,
    backgroundColor: colors.white,
    borderWidth: moderateScale(1),
    borderColor: colors.borderColor1,
  },
});
