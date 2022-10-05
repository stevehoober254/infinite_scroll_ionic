import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  users = [];
  page = 1;
  maximumPages = 5;
  constructor(private http: HttpClient) {
    this.loadUsers();
  }
  loadUsers(event?) {
    const url = `https://randomuser.me/api/?results=20&page=${this.page}`;
    this.http.get(url).subscribe((res: any) => {
      console.log(res);
      this.users = this.users.concat(res.results);

      if(event){
        event.target.complete();
      }
    });
  }
  loadData(event){
    console.log(event);
    this.page ++;
    this.loadUsers(event);
    if(this.page === this.maximumPages){
      event.target.disabled = true;
    }
  }
}
