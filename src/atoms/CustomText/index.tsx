import {StyleSheet} from 'react-native';
import {measures} from '@styles/index';
import {decode} from 'html-entities';

import {Text, TextProps} from '@react-native-material/core';

type Props = TextProps & {title?: boolean};

const CustomText: React.FC<Props> = ({variant, title, children, ...params}) => {
  const defaultVariant = title ? 'h4' : 'body1';
  const customVariant = variant || defaultVariant;
  return (
    <Text
      variant={customVariant}
      style={[styles.text, title && styles.title]}
      {...params}>
      {typeof children === 'string' ? decode(children) : children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    paddingBottom: measures.standardTextLinePadding,
    paddingTop: measures.standardTextLinePadding,
  },
  title: {
    fontWeight: 'bold',
  },
});
