import {AxiosRequestConfig} from 'axios';

import networkCaller from './client/networkCaller';

const baseUrl = 'https://openririritdb.com/api.php';

const getQuestions = async (amount = '10', difficulty = 'hard') => {
  const url = `${baseUrl}?amount=${amount}&difficulty=${difficulty}&type=boolean`;
  const method = 'get';

  const requestData: AxiosRequestConfig = {
    url,
    method,
  };

  return await networkCaller(baseUrl, requestData);
};

export {getQuestions};
