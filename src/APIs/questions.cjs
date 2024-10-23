import api from './api';

export const getQuestionsByType = async (type, value) => {
  try {
    const response = await api.get(`/questions/${type}/${value}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

export const submitAnswer = async (questionId, answer) => {
  try {
    const response = await api.post(`/questions/${questionId}/submit`, { answer });
    return response.data;
  } catch (error) {
    console.error('Error submitting answer:', error);
    throw error;
  }
};

export const getQuestionStats = async (questionId) => {
  try {
    const response = await api.get(`/questions/${questionId}/stats`);
    return response.data;
  } catch (error) {
    console.error('Error fetching question stats:', error);
    throw error;
  }
};