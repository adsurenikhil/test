import { Component, OnInit } from '@angular/core';
import { DemoDataService } from '../demo-data.service';


@Component({
  selector: 'app-http-service',
  templateUrl: './http-service.component.html',
  styleUrls: ['./http-service.component.css']
})
export class HttpServiceComponent implements OnInit {
dataArray: any;
  constructor(private httpService: DemoDataService) { }

  ngOnInit() {

  }

  getPosts() {
    this.httpService.getData().subscribe(res => this.dataArray = res);
  }

}
