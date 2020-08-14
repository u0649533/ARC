import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arc';
  switchValue = '2';

  users = [
    {id: 1, name : 'john'},
    {id: 2, name: 'jackson'},
    {id: 3, name : 'kk'},
    {id: 4, name: 'nick'}

  ];
  clsName1 = 'one';
  clsName2 = 'two';
}
