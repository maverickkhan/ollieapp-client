export class CreateFlightBookingDto {}

import {
  CabinClass,
  CreateOfferRequest,
  CreateOrder,
  CreateOrderPassenger,
  ListOffersParams,
  OrderPayment,
  OrderService,
} from '@duffel/api';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class SliceDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  origin: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  destination: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  departure_date: string;
}

export class PassensgerTypeDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  age?: number;
}

export class PassensgerAgeDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  age?: number;
}

export class DuffelSearchDto implements CreateOfferRequest {
  @IsArray()
  @Type(() => SliceDto)
  @IsNotEmpty()
  @ApiProperty()
  slices: SliceDto[];

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  passengers: (PassensgerAgeDto | PassensgerTypeDto)[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  cabin_class: CabinClass;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  return_offers: boolean;
}

export class FetchSearchResultsDto implements ListOffersParams {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  offer_request_id: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  sort?: 'total_amount' | 'total_duration';
}

export class FetchSearchResultsGeneratorDto implements ListOffersParams {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  offer_request_id: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  sort?: 'total_amount' | 'total_duration';

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  limit: number;
}

export class CreateOrderDto implements CreateOrder {
  @ApiProperty()
  selected_offers: string[];

  @ApiProperty()
  services?: Pick<OrderService, 'id' | 'quantity'>[];

  @ApiProperty()
  passengers: CreateOrderPassenger[];

  @ApiProperty()
  payments?: OrderPayment[];

  @ApiProperty()
  type: 'instant' | 'pay_later';
}
