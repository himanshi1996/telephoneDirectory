import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { IPerson } from './IPerson';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Telephone Directory';
  person = [
    {
      "ID" : 1,
      "name": "Himanshi",
      "number": 9882547742,
      "age": 23,
      "address": "Jaipur",
    },
    {
      "ID" : 2,
      "name": "Swati",
      "number": 87677564836,
      "age": 25,
      "address": "Chandigarh"
    },
    {
      "ID" : 3,
      "name": "Deepti",
      "number": 8775644432,
      "age": 30,
      "address": "Punjab",
    },
    {
      "ID" : 4,
      "name": "Deepak",
      "number": 9087504590,
      "age": 20,
      "address": "Jaipur",
    },
    {
      "ID" : 5,
      "name": "Vipul Gupta",
      "number": 7889388679,
      "age": 23,
      "address": "Chandigarh"
    },
    {
      "ID" : 6,
      "name": "Robin Saha",
      "number": 7204539959,
      "age": 29,
      "address": "Punjab",
    },
    {
      "ID" : 7,
      "name": "Baniaishah Kharlukhi",
      "number": 9087504590,
      "age": 20,
      "address": "Jaipur",
    },
    {
      "ID" : 8,
      "name": "Rimi Saha",
      "number": 7352043585,
      "age": 23,
      "address": "Chandigarh"
    },
    {
      "ID" : 9,
      "name": "Tannia",
      "number": 7204539959,
      "age": 29,
      "address": "Haryana",
    },
    {
      "ID" : 10,
      "name": "Sourab Kohli",
      "number": 7204539959,
      "age": 19,
      "address": "Haryana",
    },
    {
      "ID" : 11,
      "name": "Himanshi",
      "number": 9882547742,
      "age": 23,
      "address": "Jaipur",
    },
    {
      "ID" : 12,
      "name": "Swati",
      "number": 87677564836,
      "age": 25,
      "address": "Chandigarh"
    },
    {
      "ID" : 13,
      "name": "Deepti",
      "number": 8775644432,
      "age": 30,
      "address": "Punjab",
    },
    {
      "ID" : 14,
      "name": "Deepak",
      "number": 9087504590,
      "age": 20,
      "address": "Jaipur",
    },
    {
      "ID" : 15,
      "name": "Vipul Gupta",
      "number": 7889388679,
      "age": 23,
      "address": "Chandigarh"
    },
    {
      "ID" : 16,
      "name": "Robin Saha",
      "number": 7204539959,
      "age": 29,
      "address": "Punjab",
    },
    {
      "ID" : 17,
      "name": "Baniaishah Kharlukhi",
      "number": 9087504590,
      "age": 20,
      "address": "Jaipur",
    },
    {
      "ID" : 18,
      "name": "Rimi Saha",
      "number": 7352043585,
      "age": 23,
      "address": "Chandigarh"
    },
    {
      "ID" : 19,
      "name": "Tannia",
      "number": 7204539959,
      "age": 29,
      "address": "Haryana",
    },
    {
      "ID" : 20,
      "name": "Sourab Kohli",
      "number": 7204539959,
      "age": 19,
      "address": "Haryana",
    },
  ]
  personList = this.person;
  public filterKeyword = new FormControl();
  key: string;
  selectedPerson : IPerson;
  selectedPersonID: number;
  ngOnInit() {
    this.personList.sort(this.dynamicSort("name"));
    this.filterKeyword.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      this.key = value.toLowerCase();
  });
  if(localStorage.getItem('selectedID')){
    this.selectedPersonID = parseInt(localStorage.getItem('selectedID'));
  } else {
    this.selectedPersonID = 1;
  }
  this.selectedPerson = this.personList.find(el=> el.ID == this.selectedPersonID);
  }
  dynamicSort(property) {
    return function (a, b) {
      return a[property].localeCompare(b[property]);
    }
  }
  onDetailUpdate(data:IPerson){
    alert("Details Updated Successfully");
  }
  onPersonSelect(data:IPerson){
    this.selectedPerson = data;
    this.selectedPersonID = data.ID;
    localStorage.setItem('selectedID',this.selectedPersonID.toString());
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
