import { v4 as uuidv4 } from 'uuid';

const Venue = {
  create: (db, venueData) => {
    const newVenue = { id: uuidv4(), ...venueData };
    db.data.venues.push(newVenue);
    return newVenue;
  },
  findAll: (db) => {
    return db.data.venues;
  },
  findById: (db, id) => {
    return db.data.venues.find(venue => venue.id === id);
  },
  update: (db, id, venueData) => {
    const index = db.data.venues.findIndex(venue => venue.id === id);
    if (index !== -1) {
      db.data.venues[index] = { ...db.data.venues[index], ...venueData };
      return db.data.venues[index];
    }
    return null;
  },
  delete: (db, id) => {
    const index = db.data.venues.findIndex(venue => venue.id === id);
    if (index !== -1) {
      db.data.venues.splice(index, 1);
      return true;
    }
    return false;
  }
};

export default Venue;