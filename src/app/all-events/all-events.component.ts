import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { EventDbService } from '../services/event-db-service.service';
import { IEvent } from '../Interfaces/IEvent';
import { DataSource } from '@angular/cdk/table';
import { User } from 'firebase';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';
import {map} from 'rxjs/operators/map';
import {catchError} from 'rxjs/operators/catchError';

/**
 * @title Table retrieving data through HTTP
 */

// @Component({
//   selector: 'app-all-events',
//   templateUrl: './all-events.component.html',
//   styleUrls: ['./all-events.component.css']
// })
// export class AllEventsComponent implements OnInit, AfterViewInit {
  
//   resultsLength: any;
//   isRateLimitReached: boolean;
//   isLoadingResults: boolean;
//   displayedColumns = ['name', 'addDate', 'startDate', 'endDate', 'address', 'userId'];
//   dataSource: MatTableDataSource<IEvent>;
//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   @ViewChild(MatSort) sort: MatSort;
//   events: Array<IEvent>;
  
//   constructor(private db: EventDbService) {

//     db.getAllEvents().subscribe(events => this.events = events as IEvent[]);

//     // Assign the data to the data source for the table to render
//     this.dataSource = new MatTableDataSource<IEvent>(this.events);
//   }
//   ngOnInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }
//   applyFilter(filterValue: string) {
//     filterValue = filterValue.trim(); // Remove whitespace
//     filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
//     this.dataSource.filter = filterValue;
//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }

//   }
// }



@Component({
   selector: 'app-all-events',
   templateUrl: './all-events.component.html',
   styleUrls: ['./all-events.component.css']
 })
export class AllEventsComponent implements OnInit {
  
  dataSource = new EventDataSource(this.eventService);
  displayedColumns = ['name', 'addDate', 'startDate', 'endDate', 'address', 'userId'];
  

  constructor(private eventService: EventDbService) {}

  ngOnInit(): void {
    
  }

}

export class EventDataSource extends DataSource<any> {

  connect(): Observable<IEvent[]> {
    return this.eventService.getAllEvents();
  }

  disconnect(): void {
  }

  constructor(private eventService: EventDbService){
    super();
  }

}

