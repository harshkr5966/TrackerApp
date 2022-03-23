import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'huangular2022';
  opened = true;
  expand = false;

  fillerNav = Array.from({length: 3}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = ['a', 'b', 'c']
  constructor(private http: HttpClient) {

  }
}
