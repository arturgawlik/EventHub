import { Injectable } from '@angular/core';
import { IEvent } from '../Interfaces/IEvent';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class EventDbService {

  
  private baseEventPath = '/events';

  constructor(private db: AngularFireDatabase) { }

  public saveEvent(event: IEvent): boolean {
    const dbObj = this.db.database.ref(this.baseEventPath);
    
    let ref = dbObj.push(event);
    
    console.log('Success');

    return true;
  }

  getAllEvents() {
    let data = this.db.list(this.baseEventPath).valueChanges();

    //let eventsParsed = JSON.parse(eventsJSON);

    return data;
  }

}
