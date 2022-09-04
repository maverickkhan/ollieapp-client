import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FlightBookingsService } from './flight-bookings.service';
import {
  CreateFlightBookingDto,
  CreateOrderDto,
  DuffelSearchDto,
  FetchSearchResultsDto,
} from './dto/create-flight-booking.dto';

@Controller('flight-bookings')
export class FlightBookingsController {
  constructor(private readonly flightBookingsService: FlightBookingsService) {}

  @Post('search-for-flight')
  searchForFlight(@Body() duffelSearchDto: DuffelSearchDto) {
    return this.flightBookingsService.searchForFlight(duffelSearchDto);
  }

  @Post('fetch-search-results')
  fetchSearchResults(@Body() fetchSearchResultsDto: FetchSearchResultsDto) {
    return this.flightBookingsService.fetchSearchResults(fetchSearchResultsDto);
  }

  @Get('get-offer/:id')
  getOffer(@Param('id') id: string) {
    return this.flightBookingsService.getOffer(id);
  }

  @Patch('place-order')
  placeOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.flightBookingsService.placeOrder(createOrderDto);
  }
}
