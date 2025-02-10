import { Injectable } from '@nestjs/common';
import { Venue } from './schemas/venue.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVenueDto } from './dto/create-venue.dto';

@Injectable()
export class VenuesService {
  constructor(@InjectModel(Venue.name) private venueModel: Model<Venue>) {}

  async create(createVenueDto: CreateVenueDto): Promise<Venue> {
    const newVenue = new this.venueModel(createVenueDto);
    return newVenue.save();
  }

  async findAll(): Promise<Venue[]> {
    return this.venueModel.find().exec();
  }

  async findOne(id: string): Promise<Venue> {
    return this.venueModel.findById(id).exec();
  }

  async remove(id: string): Promise<Venue> {
    return this.venueModel.findByIdAndDelete(id).exec();
  }
}
