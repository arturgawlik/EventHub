import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ICity } from '../Interfaces/ICity';

@Injectable()
export class MeetupService {

  constructor(private httpClient: HttpClient) { }

  //settings
  apiKey: string = "671b18624b574870687e4d153775203";

  //urls
  base: string = "https://api.meetup.come";

  cities: string = "/cities";

  // getCities(): Observable<ICity[]> {

  //   let params = new HttpParams().append("key", this.apiKey).append("sign", "true");

  //   return this.httpClient.get<ICity[]>(this.base + this.cities, {
  //     params: params,
  //   });
  // }

  getCities(): Observable<ICity[]> {
    return Observable.of(this.fakeCities);
  }



  fakeCities: Array<ICity> = [
    {
      city: "Krakow",
      country: "PL",
      distance: "20",
      id: 1,
      lat: "1",
      localized_country_name: "PL",
      lon: "1",
      member_count: "1",
      name_string: "Krakow",
      ranking: "1",
      state: "Małopolska",
      zip: "32-863"
    }
  ]

}
