import { Controller, Get, Query } from '@nestjs/common';
import { AvailabilityService } from './availability.service';

@Controller('availability')
export class AvailabilityController {
  constructor(private availabilityService: AvailabilityService) {}

  @Get()
  async checkAvailability(@Query('date') date: string, @Query('time') time: string) {
    return this.availabilityService.checkAvailability(date, time);
  }
}