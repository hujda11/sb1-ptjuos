import { v4 as uuidv4 } from 'uuid';

export const registerUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newUser = { id: uuidv4(), name, email, phone };
    req.db.data.users.push(newUser);
    await req.db.write();
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    res.json(req.db.data.users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = req.db.data.users.find(u => u.id === req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const index = req.db.data.users.findIndex(u => u.id === req.params.id);
    if (index === -1) return res.status(404).json({ message: 'User not found' });
    req.db.data.users[index] = { ...req.db.data.users[index], ...req.body };
    await req.db.write();
    res.json(req.db.data.users[index]);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const index = req.db.data.users.findIndex(u => u.id === req.params.id);
    if (index === -1) return res.status(404).json({ message: 'User not found' });
    req.db.data.users.splice(index, 1);
    await req.db.write();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};