import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  addEventForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit() {
    console.log(this.addEventForm.value);
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
