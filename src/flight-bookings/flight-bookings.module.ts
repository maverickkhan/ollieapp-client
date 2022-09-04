import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { FlightBookingsService } from './flight-bookings.service';
import { FlightBookingsController } from './flight-bookings.controller';

@Module({
  imports: [
    ClientsModule.register([{ name: 'APP_SERVICE', transport: Transport.TCP }]),
  ],
  controllers: [FlightBookingsController],
  providers: [FlightBookingsService],
})
export class FlightBookingsModule {}
