import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightBookingsModule } from './flight-bookings/flight-bookings.module';

@Module({
  imports: [FlightBookingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
