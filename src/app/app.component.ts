import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>{{message}}</div>`,
})
export class AppComponent {
  message = '';

  constructor(private http: HttpClient) {
    this.http.post('/api/test')
      .subscribe((resp: any) => this.message = resp.text);
  }
}