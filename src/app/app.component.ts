import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>{{message}}</div>`,
})
export class AppComponent {
  message = '';

  const headers = { 'content-type': 'application/json'}  
  const body = JSON.stringify({"name": "bob"});

  constructor(private http: HttpClient) {
    this.http.post('/api/test',body,{'headers':headers})
      .subscribe((resp: any) => this.message = resp.text);
  }
}