import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoDataService {
  userName = 'Nikhil';
  private urlPosts = "https://jsonplaceholder.typecode.com/posts";
  getName() {
    return this.userName;
  }
  setName(tempName: string) {
    this.userName = tempName;
  }
  constructor(private httpClient: HttpClient) { }
  getData() {

    return this.httpClient.get(this.urlPosts);
  }
}
