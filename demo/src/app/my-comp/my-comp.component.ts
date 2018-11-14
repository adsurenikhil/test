import { Component, OnInit } from '@angular/core';
import { DemoDataService } from '../demo-data.service';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {
  uName = '';

  constructor(private dataService: DemoDataService) { }

  ngOnInit() {
    this.uName = this.dataService.getName();
  }
}
