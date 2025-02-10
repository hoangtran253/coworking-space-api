// bookings/schemas/booking.schema.ts
import { Schema } from 'mongoose';

export const BookingSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  venueId: { type: Schema.Types.ObjectId, ref: 'Venue', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
});