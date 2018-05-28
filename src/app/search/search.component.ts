import { Component, OnInit } from '@angular/core';
import { MeetupService } from '../services/meetup.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private meetup: MeetupService) { }

  

}
