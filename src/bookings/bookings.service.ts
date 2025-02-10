import { Injectable } from '@nestjs/common';

@Injectable()
export class BookingsService {
  async create(dto: CreateBookingDto) {
    return { message: 'Booking created' };
  }

  async findAll() {
    return [{ id: 1, user: 'test', time: '10:00' }];
  }

  async delete(id: string) {
    return { message: `Booking ${id} deleted` };
  }
}
