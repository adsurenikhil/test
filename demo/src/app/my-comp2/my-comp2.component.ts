import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp2',
  templateUrl: './my-comp2.component.html',
  styleUrls: ['./my-comp2.component.css']
})
export class MyComp2Component implements OnInit {
myEmp = [
  {eId: 101, eName: 'EMP1', emarks: 96},
  {eId: 102, eName: 'EMP2', emarks: 95},
  {eId: 103, eName: 'EMP3', emarks: 94},
  {eId: 104, eName: 'EMP4', emarks: 93}
];
stateName = 'Maharashtra';
stateCode = 12121;

 flagvar = true;

  constructor() { }

themeVar = 'admin';

toggleDiv() {
  this.flagvar = !this.flagvar;
  if (this.themeVar === 'admin') {
    this.themeVar = 'enduser';
  } else {
    this.themeVar = 'admin';
  }
}

  ngOnInit() {
  }

}
