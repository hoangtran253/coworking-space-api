// src/bookings/dto/create-booking.dto.ts
export class CreateBookingDto {
  userId: string;
  venueId: string;
  date: Date;
  time: string;
}