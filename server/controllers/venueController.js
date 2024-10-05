import Venue from '../models/Venue.js';

export const createVenue = async (req, res) => {
  try {
    const venue = Venue.create(req.db, req.body);
    await req.db.write();
    res.status(201).json(venue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getVenues = async (req, res) => {
  try {
    const venues = Venue.findAll(req.db);
    res.json(venues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getVenueById = async (req, res) => {
  try {
    const venue = Venue.findById(req.db, req.params.id);
    if (!venue) return res.status(404).json({ message: 'Venue not found' });
    res.json(venue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateVenue = async (req, res) => {
  try {
    const venue = Venue.update(req.db, req.params.id, req.body);
    if (!venue) return res.status(404).json({ message: 'Venue not found' });
    await req.db.write();
    res.json(venue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteVenue = async (req, res) => {
  try {
    const deleted = Venue.delete(req.db, req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Venue not found' });
    await req.db.write();
    res.json({ message: 'Venue deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};