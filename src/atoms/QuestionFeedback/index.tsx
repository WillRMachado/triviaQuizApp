import React from 'react';
import {StyleSheet, View} from 'react-native';

import CustomText from '../CustomText';

type Props = {questionTitle: string; isCorrectAnswer: boolean};

const QuestionFeedback: React.FC<Props> = ({
  questionTitle,
  isCorrectAnswer,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.line}>
        <CustomText title variant={'h3'}>
          {isCorrectAnswer ? '+' : '-'}
        </CustomText>
        <View style={styles.textWrapper}>
          <CustomText>{questionTitle}</CustomText>
        </View>
      </View>
    </View>
  );
};

export default QuestionFeedback;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30,
  },
  textWrapper: {paddingRight: 30, paddingLeft: 10},
});
