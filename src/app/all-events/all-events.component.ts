import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { EventDbService } from '../services/event-db-service.service';
import { IEvent } from '../Interfaces/IEvent';
import { DataSource } from '@angular/cdk/table';
import { User } from 'firebase';
import { Observable } from 'rxjs/Observable';

// @Component({
//   selector: 'app-all-events',
//   templateUrl: './all-events.component.html',
//   styleUrls: ['./all-events.component.css']
// })
// export class AllEventsComponent implements OnInit {
//   displayedColumns = ['name', 'addDate', 'startDate', 'endDatew', 'userId', ''];
//   dataSource: MatTableDataSource<IEvent>;
//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   @ViewChild(MatSort) sort: MatSort;
//   // constructor(private db: EventDbService) {
//   //   // Create 100 users
//   //   //const events: IEvent[] = [];
//   //   let events = db.getAllEvents();
//   //   let eventsArr;
//   //   // Assign the data to the data source for the table to render
//   //   this.dataSource = new MatTableDataSource(events.subscribe(x => eventsArr = x));
//   // }
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
// /** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
//       NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//   };
// }
// /** Constants used to fill up our data base. */
// const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
//   'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
// const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
//   'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
//   'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
// export interface UserData {
//   id: string;
//   name: string;
//   progress: string;
//   color: string;
// }


@Component({
   selector: 'app-all-events',
   templateUrl: './all-events.component.html',
   styleUrls: ['./all-events.component.css']
 })
export class AllEventsComponent implements OnInit {
  
  dataSource = new EventDataSource(this.eventService);
  displayedColumns = ['name', 'addDate', 'startDate', 'endDate', 'userId'];

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

