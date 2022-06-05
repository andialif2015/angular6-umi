import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { dataCard } from '../card/data-card';

@Component({
  selector: 'app-tambah-data',
  templateUrl: './tambah-data.component.html',
  styleUrls: ['./tambah-data.component.css'],
})
export class TambahDataComponent {

  data = { } as dataCard;



  @Output() sendData: EventEmitter<any> = new EventEmitter();

  onSubmit(form: NgForm){

    const { firstName, lastName, company, address, phoneNumber, age } = form.value;

    this.data.name = firstName + ' ' + lastName;
    this.data.address = address;
    this.data.company = company;
    this.data.phone = phoneNumber;
    this.data.age = age;
    this.data.countLikes = 0;

    if(this.data){
      this.sendData.emit({
        ...this.data
      });
    }

  }




}
