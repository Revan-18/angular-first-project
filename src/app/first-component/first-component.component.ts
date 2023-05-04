import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
 
 
 user : any ; 
 @Input('name') userName : String | undefined ; 

  constructor() { 
    this.user ={
      name : 'Revan',
      title : 'software Developer',
      address : 'HSR lauout bangalore',
      Phone : 
      [
        '123456789',
        '1939548595'
      ]
    };


  }

  ngOnInit(): void {
  }

}
