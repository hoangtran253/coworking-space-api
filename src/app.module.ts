import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { BookingsModule } from './bookings/bookings.module';
import { VenuesModule } from './venues/venues.module';
import { AvailabilityModule } from './availability/availability.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Đọc .env
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    UsersModule,
    BookingsModule,
    VenuesModule,
    AvailabilityModule,
  ],
})
export class AppModule {}
