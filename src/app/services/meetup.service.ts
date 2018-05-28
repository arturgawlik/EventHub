import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ICity } from '../Interfaces/ICity';

@Injectable()
export class MeetupService {

  constructor(private httpClient: HttpClient) { }

  //settings
  apiKey: string = "62533635792b643044b5b554e2246";

  //urls
  base: string = "https://api.meetup.com/2";

  cities: string = "/cities";

  getCities(): Observable<ICity[]> {
    return null;
  }

}
