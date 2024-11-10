// Library Imports
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

// Local Imports
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import CText from '../common/CText';
import {
  DetailIcon1,
  DetailIcon2,
  DetailIcon3,
  EnergyIcon,
} from '../../assets/svg';
import {useNavigation} from '@react-navigation/native';
import {StackNav} from '../../navigation/NavigationKeys';
import strings from '../../i18n/strings';

export default function TraceVehicleDetailComponent({item, isList}) {
  console.log('====================================');
  console.log('Item', item);
  console.log('====================================');
  const navigation = useNavigation();
  const [isShow, setIsShow] = useState(false);

  const onPressShow = () => setIsShow(!isShow);

  const onPressList = () =>
    navigation.navigate(StackNav.TraceVehicleScreen, {item});

  const RenderProgress = ({fill, text1, title, color}) => {
    return (
      <AnimatedCircularProgress
        size={105}
        width={8}
        fill={fill}
        tintColor={color}
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor={colors.borderColor1}
        rotation={230}
        arcSweepAngle={260}
        lineCap="round">
        {fill => (
          <View style={styles.center}>
            <CText type={'B14'} color={colors.textColor1}>
              {text1}
            </CText>
            <CText type={'M12'} align={'center'} color={colors.gray1}>
              {'Ltrs'}
            </CText>
            <View style={localStyles.progressTitleSTyle}>
              <CText
                type={'M12'}
                align={'center'}
                numberOfLines={1}
                color={colors.textColor1}>
                {title}
              </CText>
            </View>
          </View>
        )}
      </AnimatedCircularProgress>
    );
  };

  const ProgressDescComponent = ({Icon, desc}) => {
    return (
      <View style={localStyles.rowContainer2}>
        <Icon />
        <CText type={'M12'} numberOfLines={1}>
          {desc}
        </CText>
      </View>
    );
  };

  const RenderDetail1Component = ({
    title,
    desc1,
    desc2,
    color = colors.primary,
  }) => (
    <View style={localStyles.renderDetail1Style}>
      <CText
        type={'B12'}
        style={localStyles.detailText1Style}
        numberOfLines={1}
        color={colors.gray1}>
        {title}
      </CText>
      <CText
        type={'M12'}
        style={localStyles.detailText2Style}
        numberOfLines={1}
        color={colors.primary}>
        {desc1}
      </CText>
      {desc2 && (
        <CText
          type={'M12'}
          style={localStyles.detailText2Style}
          numberOfLines={1}
          color={color}>
          {desc2}
        </CText>
      )}
    </View>
  );

  const SubHeader = ({title}) => (
    <View style={localStyles.subHeaderStyle}>
      <CText type={'B12'} numberOfLines={1} color={colors.textColor1}>
        {title}
      </CText>
      <CText type={'B12'} numberOfLines={1} color={colors.textColor4}>
        {'03'}
      </CText>
    </View>
  );

  const RenderFault1 = ({title, desc1}) => (
    <View style={localStyles.renderDetail1Style}>
      <CText
        type={'M12'}
        style={localStyles.detailText1Style}
        numberOfLines={1}
        color={colors.gray1}>
        {title}
      </CText>
      <CText type={'M12'} numberOfLines={1} color={colors.gray1}>
        {desc1}
      </CText>
    </View>
  );

  const RenderFault2 = ({title, desc1}) => (
    <View style={localStyles.renderDetail1Style}>
      <CText
        type={'B12'}
        style={[localStyles.detailText3Style, styles.pr10]}
        numberOfLines={1}
        color={colors.gray1}>
        {title}
      </CText>
      <CText
        type={'B12'}
        style={localStyles.detailText2Style}
        numberOfLines={1}
        color={colors.textColor4}>
        {desc1}
      </CText>
    </View>
  );

  const RenderIssueComponent = ({title}) => {
    return (
      <View style={localStyles.issueRootContainer}>
        <View style={localStyles.issueStyle} />
        <CText type={'B12'} align={'center'} color={colors.gray1}>
          {title}
        </CText>
      </View>
    );
  };

  const RenderDetail2Component = ({title, desc1}) => (
    <View style={localStyles.renderDetail1Style}>
      <CText
        type={'B12'}
        style={localStyles.detailText1Style}
        numberOfLines={1}
        color={colors.gray1}>
        {title}
      </CText>
      <CText
        type={'M12'}
        style={localStyles.detailText1Style}
        numberOfLines={1}
        color={colors.primary}>
        {desc1}
      </CText>
    </View>
  );

  return (
    <TouchableOpacity
      disabled={!isList}
      onPress={onPressList}
      style={localStyles.rootContainer}>
      <View style={[localStyles.dividerStyle, {backgroundColor: item.color}]} />
      <View style={localStyles.rightContainer}>
        <View style={styles.rowSpaceBetween}>
          <View style={localStyles.descContainer1}>
            <CText type={'B22'} numberOfLines={1} color={colors.textColor1}>
              {item.vNo}
            </CText>
            <CText type={'M14'} numberOfLines={1} color={colors.gray1}>
              {item.desc}
            </CText>
          </View>
          <View style={styles.rowCenter}>
            <View style={styles.itemsEnd}>
              <View style={localStyles.rowContainer}>
                <View>{item.batteryIcon}</View>
                <View>{item.fuelIcon}</View>
              </View>
              <View style={styles.rowCenter}>
                <EnergyIcon
                  width={moderateScale(20)}
                  height={moderateScale(20)}
                />
                <CText
                  type={'S12'}
                  style={styles.ml5}
                  color={colors.textColor6}>
                  {item.energy}
                </CText>
              </View>
            </View>
            <View
              style={[
                localStyles.statusContainer,
                {backgroundColor: item.color},
              ]}>
              <CText type={'B14'} color={colors.white}>
                {item.status}
              </CText>
              <CText type={'M12'} color={colors.white}>
                {item.title}
              </CText>
            </View>
          </View>
        </View>
        {!isList && (
          <View style={localStyles.rightContainer}>
            <View style={styles.rowSpaceBetween}>
              <View style={localStyles.rowContainer1}>
                <RenderProgress
                  fill={80}
                  text1={'20/90'}
                  title={strings.diesel}
                  color={colors.progress1}
                />
                <RenderProgress
                  fill={20}
                  text1={'6/20'}
                  title={strings.adBlue}
                  color={colors.progress2}
                />
              </View>
              <View style={localStyles.progressDescStyle}>
                <ProgressDescComponent Icon={DetailIcon1} desc={'99999'} />
                <ProgressDescComponent Icon={DetailIcon3} desc={'999 hrs'} />
                <ProgressDescComponent Icon={DetailIcon2} desc={'12 kmpl'} />
              </View>
            </View>
            <View style={styles.rowSpaceBetween}>
              <View style={styles.flex}>
                <CText type={'M12'} numberOfLines={2} color={colors.gray1}>
                  {'Location: '}
                  <CText
                    type={'M12'}
                    numberOfLines={1}
                    color={colors.textColor5}>
                    {
                      'Location: 3rd Floor, 4/4, First Main Road, Industrial Town Rajaji Naga Near San Francisco'
                    }
                  </CText>
                </CText>
                <CText type={'M12'} numberOfLines={1} color={colors.gray1}>
                  {'Last Updated: 14:45:00, 13 Dec’23'}
                </CText>
              </View>
              <View style={styles.ml10}>
                <TouchableOpacity>
                  <CText
                    type={'B12'}
                    style={localStyles.needHelpText}
                    numberOfLines={1}
                    color={colors.primary}>
                    {strings.needHelp}
                  </CText>
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={isShow}
                  onPress={onPressShow}
                  style={[
                    localStyles.detailButton,
                    {
                      backgroundColor: !isShow
                        ? colors.textColor1
                        : colors.white,
                    },
                  ]}>
                  <CText type={'B14'} numberOfLines={1} color={colors.white}>
                    {strings.details}
                  </CText>
                </TouchableOpacity>
              </View>
            </View>
            {isShow && (
              <View style={localStyles.rightContainer}>
                <View style={localStyles.divider1Style} />
                <View style={localStyles.desc1ContainerSTyle}>
                  <RenderDetail1Component
                    title={'Distance to service'}
                    desc1={'270 km'}
                    desc2={'Overdue'}
                    color={colors.textColor4}
                  />
                  <RenderDetail1Component
                    title={'Hours to service'}
                    desc1={'5 hours'}
                    desc2={'Overdue'}
                    color={colors.textColor4}
                  />
                  <RenderDetail1Component
                    title={'Trip A Fuel Efficiency'}
                    desc1={'2500000 km'}
                    desc2={'12 kmpl'}
                  />
                  <RenderDetail1Component
                    title={'Trip B Fuel Efficiency'}
                    desc1={'2500000 km'}
                    desc2={'12 kmpl'}
                  />
                  <RenderDetail1Component
                    title={'Engine Temperature'}
                    desc1={'24°'}
                  />
                  <RenderDetail1Component
                    title={'Outside Temperature'}
                    desc1={'24°'}
                  />
                </View>
                <View style={localStyles.divider1Style} />
                <View>
                  <SubHeader title={'Faults:'} />
                  <View style={localStyles.desc1ContainerSTyle}>
                    <RenderFault1
                      title={'P203C:'}
                      desc1={'Def Tank level warning low'}
                    />
                    <RenderFault1
                      title={'P203C:'}
                      desc1={'Def Tank level warning low'}
                    />
                    <RenderFault1
                      title={'P203C:'}
                      desc1={'Def Tank level warning low'}
                    />
                  </View>
                  <View style={[localStyles.desc1ContainerSTyle, styles.mt15]}>
                    <RenderFault2
                      title={'Level 1 Inducement/Torque Reduction in'}
                      desc1={'10 Hours'}
                    />
                    <RenderFault2
                      title={'Level 3 Inducement/Torque Reduction in'}
                      desc1={'1000 Hours'}
                    />
                  </View>
                </View>
                <View>
                  <SubHeader title={'Other Issues:'} />
                  <View style={styles.rowSpaceBetween}>
                    <RenderIssueComponent title={'P203C:'} />
                    <RenderIssueComponent title={'P203C:'} />
                    <RenderIssueComponent title={'P203C:'} />
                    <RenderIssueComponent title={'P203C:'} />
                  </View>
                </View>
                <View style={localStyles.divider1Style} />
                <View style={localStyles.desc1ContainerSTyle}>
                  <RenderDetail2Component
                    title={'Driver'}
                    desc1={'Gulgule Singh'}
                  />
                  <RenderDetail2Component
                    title={'Driver ID'}
                    desc1={'DRI938981384'}
                  />
                  <RenderDetail2Component
                    title={'Phone No.'}
                    desc1={'+91 8294728492'}
                  />
                  <RenderDetail2Component
                    title={'Licence No.'}
                    desc1={'93859385927593'}
                  />
                </View>
              </View>
            )}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const localStyles = StyleSheet.create({
  rootContainer: {
    backgroundColor: colors.white,
    ...styles.p10,
    ...styles.mb15,
    ...styles.rowCenter,
    borderRadius: moderateScale(12),
  },
  dividerStyle: {
    width: moderateScale(4),
    borderRadius: moderateScale(4),
    height: '100%',
    ...styles.mh10,
    ...styles.justifyCenter,
  },
  rightContainer: {
    ...styles.flex,
    width: '100%',
    gap: moderateScale(10),
  },
  rowContainer: {
    ...styles.rowCenter,
    ...styles.mb5,
    gap: moderateScale(7),
  },
  statusContainer: {
    width: moderateScale(72),
    borderRadius: moderateScale(8),
    marginLeft: moderateScale(10),
    height: moderateScale(52),
    ...styles.center,
    ...styles.ph5,
  },
  descContainer1: {
    ...styles.flex,
  },
  majorIssueContainer: {
    height: '100%',
    // width: moderateScale(30),
    backgroundColor: 'red',
    ...styles.center,
    transform: [{rotate: '90deg'}],
  },
  rowContainer1: {
    ...styles.rowCenter,
    gap: moderateScale(15),
  },
  progressTitleSTyle: {
    position: 'absolute',
    bottom: moderateScale(-20),
    ...styles.center,
    zIndex: 99,
  },
  rowContainer2: {
    gap: moderateScale(5),
    ...styles.rowStart,
  },
  progressDescStyle: {
    width: moderateScale(72),
    gap: moderateScale(7),
  },
  detailButton: {
    width: moderateScale(72),
    height: moderateScale(32),
    borderRadius: moderateScale(10),
    backgroundColor: colors.black,
    ...styles.center,
    ...styles.mt5,
  },
  needHelpText: {
    textDecorationLine: 'underline',
  },
  divider1Style: {
    width: '100%',
    height: moderateScale(1),
    backgroundColor: colors.borderColor2,
    marginVertical: moderateScale(10),
    borderRadius: moderateScale(2),
  },
  renderDetail1Style: {
    ...styles.rowStart,
    width: '100%',
  },
  detailText1Style: {
    width: '46%',
  },
  detailText2Style: {
    width: '27%',
  },
  detailText3Style: {
    width: '73%',
  },
  desc1ContainerSTyle: {
    gap: moderateScale(4),
  },
  subHeaderStyle: {
    ...styles.rowSpaceBetween,
    borderBottomWidth: moderateScale(1),
    borderBottomColor: colors.gray1,
    paddingBottom: moderateScale(4),
    ...styles.mb5,
  },
  issueStyle: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(12),
    borderColor: colors.textColor4,
    borderWidth: moderateScale(1),
    marginVertical: moderateScale(5),
  },
  issueRootContainer: {
    width: '25%',
    ...styles.center,
    ...styles.mv5,
  },
});
