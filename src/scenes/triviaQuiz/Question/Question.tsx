import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SceneWrapper} from '@template/index';

import {CustomButton, CustomText, QuestionBox} from '@atoms/index';

type Props = {
  onPressTrue: () => void;
  onPressFalse: () => void;
  questionData: {category: string; question: string};
  currentQuestionNumber: number;
  questionsLength: number;
};

const Question: React.FC<Props> = ({
  onPressTrue,
  onPressFalse,
  questionData,
  currentQuestionNumber,
  questionsLength,
}) => {
  return (
    <SceneWrapper>
      <CustomText title>{questionData?.category}</CustomText>
      <View>
        <QuestionBox>
          <CustomText>{questionData?.question}</CustomText>
        </QuestionBox>
        <CustomText>{`${currentQuestionNumber}/${questionsLength}`}</CustomText>
      </View>

      <View style={styles.buttonsWrapper}>
        <CustomButton title="TRUE" onPress={onPressTrue} />
        <CustomButton title="FALSE" onPress={onPressFalse} />
      </View>
    </SceneWrapper>
  );
};

export default Question;

const styles = StyleSheet.create({
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
});
