import { Component, OnInit } from '@angular/core';
import { DemoDataService } from '../demo-data.service';

@Component({
  selector: 'app-mycomp3',
  templateUrl: './mycomp3.component.html',
  styleUrls: ['./mycomp3.component.css']
})
export class Mycomp3Component implements OnInit {
uName = '';
  constructor(private myobj: DemoDataService) { }

  ngOnInit() {
    this.uName = this.myobj.getName();
  }

}
