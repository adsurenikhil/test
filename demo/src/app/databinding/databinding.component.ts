import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }
  anyname = 'Enter Something...';
  handleClick() {
    alert('It Works!!!' + this.anyname);
  }

  ngOnInit() {

  }


}

