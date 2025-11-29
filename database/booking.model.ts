import mongoose, { Document, Schema } from 'mongoose';
import Event from './event.model';

export interface IBooking extends Document {
  eventId: mongoose.Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const bookingSchema = new Schema<IBooking>({
  eventId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Event', 
    required: true,
    index: true
  },
  email: { 
    type: String, 
    required: true, 
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
  }
}, {
  timestamps: true
});

// Pre-save hook to validate event exists
bookingSchema.pre('save', async function(next) {
  if (this.isModified('eventId') || this.isNew) {
    const eventExists = await Event.findById(this.eventId);
    if (!eventExists) {
      return next(new Error('Referenced event does not exist'));
    }
  }
  next();
});

const Booking = mongoose.models.Booking || mongoose.model<IBooking>('Booking', bookingSchema);

export default Booking;