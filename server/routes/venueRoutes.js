import express from 'express';
import { createVenue, getVenues, getVenueById, updateVenue, deleteVenue } from '../controllers/venueController.js';

const router = express.Router();

router.post('/', createVenue);
router.get('/', getVenues);
router.get('/:id', getVenueById);
router.put('/:id', updateVenue);
router.delete('/:id', deleteVenue);

export default router;