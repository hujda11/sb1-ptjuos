import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
  try {
    const booking = Booking.create(req.db, req.body);
    await req.db.write();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = Booking.findAll(req.db);
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookingById = async (req, res) => {
  try {
    const booking = Booking.findById(req.db, req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBooking = async (req, res) => {
  try {
    const booking = Booking.update(req.db, req.params.id, req.body);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    await req.db.write();
    res.json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const cancelBooking = async (req, res) => {
  try {
    const booking = Booking.cancel(req.db, req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    await req.db.write();
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};