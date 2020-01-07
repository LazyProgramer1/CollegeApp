import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollegelistService {
  private data = [
    {
      standard: 'plustwo',
      expanded: true,
      colleges: [
        { id: 0, name: 'NIST', location: 'lainchour',Image: 'assetes/img/nist.jpg'},
        {  id: 1, name: 'kIST', location: 'lainchour' },
        {  id: 2, name: 'united', location: 'lainchour'},
        { id: 3, name: 'NIST', location: 'lainchour'}
      ]
    },
    {
      standard: 'bachelors',
      expanded:true,
      colleges: [
        {  id: 0, name: 'kIST', location: 'lainchour'},
        {  id: 1, name: 'kIST', location: 'lainchour'}
      ]
    },
    {
      standard: 'masters',
      expanded:true,
      colleges: [
        {  id: 1, name: 'kIST', location: 'lainchour'},
        {  id: 1, name: 'kIST', location: 'lainchour'}
      ]
    }
  ];
  private colleges = [];
  constructor() { }
  getColleges() {
    return this.data;
  }
 
  getCart() {
    return this.colleges;
  }
 
  addProduct(college) {
    this.colleges.push(college);
  }
}
