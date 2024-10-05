import dotenv from 'dotenv';

dotenv.config();

export const createPaymentIntent = async (req, res) => {
  try {
    const { amount } = req.body;

    // For now, we'll just return a mock response
    res.json({ clientSecret: 'mock_client_secret' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};