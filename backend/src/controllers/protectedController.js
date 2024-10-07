 const protectedData = {
    message: 'This is mine.',
    timestamp: new Date(),
  };
  
  const getProtectedData = (req, res) => {
    res.json(protectedData);
  };
  
  module.exports = {
    getProtectedData,
  };
  