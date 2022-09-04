import { Test, TestingModule } from '@nestjs/testing';
import { FlightBookingsController } from './flight-bookings.controller';
import { FlightBookingsService } from './flight-bookings.service';

describe('FlightBookingsController', () => {
  let controller: FlightBookingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlightBookingsController],
      providers: [FlightBookingsService],
    }).compile();

    controller = module.get<FlightBookingsController>(FlightBookingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
