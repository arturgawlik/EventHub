import { Component, OnInit } from '@angular/core';
import { MeetupService } from '../services/meetup.service';
import { ICity } from '../Interfaces/ICity';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private meetup: MeetupService) { }

  cities: any = [];

  selectedCity: any;

  ngOnInit(): void {
   this.cities = this.meetup.getCities(); 
  }

}
