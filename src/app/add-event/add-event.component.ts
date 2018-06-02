import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventDbService } from '../services/event-db-service.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  addEventForm: FormGroup;

  constructor(private db: EventDbService) { }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit() {
    console.log(this.addEventForm.value);
    console.log(this.addEventForm.valid);

    if (this.addEventForm.valid) {
      this.db.saveEvent(this.addEventForm.value);
      this.addEventForm.reset();
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

}
