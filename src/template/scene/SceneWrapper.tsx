import {View} from 'react-native';
import React from 'react';
import globalStyles from '@styles/index';

type Props = {style?: Record<string, string | number>};

const SceneWrapper: React.FC<Props> = ({children, style, ...params}) => {
  const customStyle = style || {};
  return (
    <View
      style={[globalStyles.structure.contentContainer, customStyle]}
      {...params}>
      {children}
    </View>
  );
};

export default SceneWrapper;
