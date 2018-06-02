import { Injectable } from '@angular/core';
import { IEvent } from '../Interfaces/IEvent';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class EventDbService {

  private basePath = '/events';

  constructor(private db: AngularFireDatabase) { }

  public saveEvent(event: IEvent): boolean {
    const obj = this.db.database.ref(this.basePath);
    
    event.addDate = new Date();

    
    obj.push(event);
    console.log('Success');

    return true;
  }

}
