import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SceneWrapper} from '@template/index';

import {CustomButton, CustomText, QuestionFeedbackList} from '@atoms/index';

type Props = {
  onStartQuiz: () => void;
  questionAmount: number;
  correctsAmount: number;
};

const Welcome: React.FC<Props> = ({
  onStartQuiz,
  questionAmount,
  correctsAmount,
}) => {
  return (
    <SceneWrapper>
      <View>
        <CustomText title>YOU SCORED</CustomText>
        <CustomText title>{`${correctsAmount} / ${questionAmount}`}</CustomText>
      </View>
      <View style={styles.feedbackWrapper}>
        <QuestionFeedbackList />
      </View>
      <CustomButton title="Play Again?" onPress={onStartQuiz} />
    </SceneWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  feedbackWrapper: {
    flex: 0.8,
  },
});
