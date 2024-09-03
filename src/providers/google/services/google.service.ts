import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import serviceConfiguration from 'src/config/service-configuration';
import { RestaurantServiceDtoResponse } from '../dto/restaurant.dto';

@Injectable()
export class GoogleService {
  constructor(private httpService: HttpService) {}

  async searchByCity(
    radius: number = 5000,
    latitude?: number,
    longitude?: number,
  ): Promise<RestaurantServiceDtoResponse[]> {
    const url = `${serviceConfiguration().maps.url_by_query}${latitude},${longitude}&radius=${radius}&type=restaurant&key=${serviceConfiguration().maps.api_key}`;
    const response = await this.httpService.get(url).toPromise();

    const restaurants: RestaurantServiceDtoResponse[] =
      response.data.results.map((result) => {
        return {
          name: result?.name || '',
          rating: result?.rating || 0,
          address: result?.vicinity || '',
          openNow: result?.opening_hours?.open_now || false,
          priceLevel: result?.price_level || 0,
          ratingsTotal: result?.user_ratings_total || 0,
        };
      });

    return restaurants;
  }
}
