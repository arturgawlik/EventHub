import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EventDbService } from '../services/event-db-service.service';
import { IEvent } from '../Interfaces/IEvent';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  addEventForm: FormGroup;

  constructor(private db: EventDbService, private fb: FormBuilder, private auth: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit() {
    console.log(this.addEventForm.value);
    console.log(this.addEventForm.valid);

    if (this.addEventForm.valid) {
      let startDate = this.addEventForm.value['startDate'].toDateString();
      let endDate = this.addEventForm.value['endDate'].toDateString();

      let obj: IEvent = {
        name: this.addEventForm.value['name'],
        description: this.addEventForm.value['description'],
        addDate: new Date().toDateString(),
        startDate: this.addEventForm.value['startDate'].toDateString(),
        endDate: this.addEventForm.value['endDate'].toDateString(),
        address: this.addEventForm.value['address'],
        userId: this.auth.af.auth.currentUser.email,
        arrives: 0,
      }

      this.db.saveEvent(obj);
      this.rebuildForm();
      this.snackBar.open('Done','Event has been added', {
        duration: 3000,
      });
    }

  }

  private createForm(){
    this.addEventForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      description: new FormControl('', [Validators.required, Validators.minLength(5)]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.minLength(5)]),
    })
  }

  private rebuildForm() {
    this.addEventForm.reset();
  }

}
