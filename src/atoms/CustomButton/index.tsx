import React from 'react';
import {Button, ButtonProps} from '@react-native-material/core';

type Props = ButtonProps;

const CustomButton: React.FC<Props> = ({...params}) => {
  return <Button {...params} />;
};

export default CustomButton;
