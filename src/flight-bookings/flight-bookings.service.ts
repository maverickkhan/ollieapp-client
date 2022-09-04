import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  CreateFlightBookingDto,
  CreateOrderDto,
  DuffelSearchDto,
  FetchSearchResultsDto,
} from './dto/create-flight-booking.dto';
import { UpdateFlightBookingDto } from './dto/update-flight-booking.dto';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class FlightBookingsService {
  private client: ClientProxy;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3001,
      },
    });
  }

  async searchForFlight(duffelSearchDto: DuffelSearchDto) {
    try {
      const data = await this.client.send('searchForFlight', duffelSearchDto);
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async fetchSearchResults(fetchSearchResultsDto: FetchSearchResultsDto) {
    try {
      const data = await this.client.send(
        'fetchSearchResults',
        fetchSearchResultsDto,
      );
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getOffer(id: string) {
    try {
      const data = await this.client.send('getOffer', id);
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async placeOrder(createOrderDto: CreateOrderDto) {
    try {
      const data = await this.client.send('placeOrder', createOrderDto);
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
