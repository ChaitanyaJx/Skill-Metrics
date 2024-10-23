import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Questions from './Questions';

const QuestionsPaths = () => {
  return (
    <Routes>
      <Route path="/questions/:field" element={<Questions />} />
    </Routes>
  );
};

export default QuestionsPaths;