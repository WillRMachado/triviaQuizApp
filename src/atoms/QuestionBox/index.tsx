import React from 'react';
import {View, StyleSheet} from 'react-native';

import {measures} from '@styles/index';

// type Props = ButtonProps;

const CustomButton: React.FC<Props> = ({children, ...params}) => {
  return (
    <View style={style.box} {...params}>
      {children}
    </View>
  );
};

export default CustomButton;

const style = StyleSheet.create({
  box: {
    borderWidth: 1,
    height: measures.responsiveHeight / 3,
    width: measures.responsiveHeight / 3,
    justifyContent: 'center',
    padding: measures.XSPadding,
  },
});
