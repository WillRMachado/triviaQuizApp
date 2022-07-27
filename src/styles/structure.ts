import {StyleSheet} from 'react-native';
import {StatusBar} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const statusBarHeight = StatusBar.currentHeight || 0;
const standardPadding = responsiveWidth(5);
const standardTextLinePadding = responsiveFontSize(1);

const fontSize = {
  XXS: standardTextLinePadding,
  XS: responsiveFontSize(1.5),
  S: responsiveFontSize(2),
  M: responsiveFontSize(2.5),
  L: responsiveFontSize(3),
  XL: responsiveFontSize(6),
  XXL: responsiveFontSize(10),
  iconXXL: responsiveFontSize(25),
};

const border = {
  borderWidthStandard: responsiveWidth(100) / 500,
  borderRadiusStandard: responsiveWidth(100) / 25,
  borderRadiusDetail: responsiveWidth(100) / 75,
};

const measures = {
  standardPadding: standardPadding,
  standardTextLinePadding: standardTextLinePadding,
  responsiveHeight: responsiveHeight(100),
  responsiveWidth: responsiveWidth(100),
  paddingAdjustedScreenHeight:
    responsiveHeight(100) - standardPadding * 2 - statusBarHeight,
  paddingAdjustedScreenWidth: responsiveWidth(100) - standardPadding * 2,
  fontSize: fontSize,
  border: border,
  XSPadding: standardPadding / 2,
};

const structure = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: standardPadding,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export {measures, structure};
