import { v4 as uuidv4 } from 'uuid';

const Booking = {
  create: (db, bookingData) => {
    const newBooking = { id: uuidv4(), ...bookingData, status: 'pending' };
    db.data.bookings.push(newBooking);
    return newBooking;
  },
  findAll: (db) => {
    return db.data.bookings;
  },
  findById: (db, id) => {
    return db.data.bookings.find(booking => booking.id === id);
  },
  update: (db, id, bookingData) => {
    const index = db.data.bookings.findIndex(booking => booking.id === id);
    if (index !== -1) {
      db.data.bookings[index] = { ...db.data.bookings[index], ...bookingData };
      return db.data.bookings[index];
    }
    return null;
  },
  cancel: (db, id) => {
    const index = db.data.bookings.findIndex(booking => booking.id === id);
    if (index !== -1) {
      db.data.bookings[index].status = 'cancelled';
      return db.data.bookings[index];
    }
    return null;
  }
};

export default Booking;