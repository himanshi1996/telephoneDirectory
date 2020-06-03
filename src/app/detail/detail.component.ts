import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPerson } from '../IPerson';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  private _person;
  get person() { return this._person };
  @Input() set person(val: IPerson) {
    if (val) {
      this._person = val;
      this.initForm();
    }
  };
  @Output() updateDetail : EventEmitter<any> = new EventEmitter<any>()
  constructor(private fb: FormBuilder) { }
  personDetails: FormGroup;
  ngOnInit() {
    if(this.person){
      this.initForm();
    }
  }
  initForm() {
    this.personDetails = this.fb.group({
      name : [this.person.name,[Validators.required]],
      number : [this.person.number,[Validators.required]],
      age : [this.person.age,[Validators.required]],
      address : [this.person.address,[Validators.required]],
    })
    this.personDetails.markAsPristine();
  }
  submitData(){
    this.person.name = this.personDetails.controls.name.value;
    this.person.number = this.personDetails.controls.number.value;
    this.person.age = this.personDetails.controls.age.value;
    this.person.address = this.personDetails.controls.address.value;
    this.updateDetail.emit(this.person);
  }
}
