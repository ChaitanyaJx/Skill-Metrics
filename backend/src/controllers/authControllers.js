 const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { readJSON, writeJSON } = require('../utils/fileHandler');
const { v4: uuidv4 } = require('uuid');

const register = (req, res) => {
  const { email, password } = req.body;

   const users = readJSON('users.json');

   const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

   const hashedPassword = bcrypt.hashSync(password, 10);

   const newUser = {
    id: uuidv4(),
    email,
    password: hashedPassword,
    role: 'user',  
  };

  users.push(newUser);
  writeJSON('users.json', users);

  res.status(201).json({ message: 'User registered successfully' });
};

const login = (req, res) => {
  const { email, password } = req.body;

   const users = readJSON('users.json');

   const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

   const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

   const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
};

const logout = (req, res) => {
   res.json({ message: 'Logged out successfully' });
};

module.exports = {
  register,
  login,
  logout,
};
