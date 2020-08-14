import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from  '@angular/common/http';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  orderStatus:any;
  data: Observable<any>;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    //obswrvable with observer  res  and handle multiple subscriptions
    this.data = new Observable(res=>{
        setTimeout(()=> {res.next('In progress')},4000);
        setTimeout(()=> {res.next('ordering')},6000);
        setTimeout(()=> {res.next('completed')},9000);
        setTimeout(()=> {res.complete()},9000); // no more listen to observable
    });
    
    this.data.subscribe(val => {
      this.orderStatus = val;
    });

    this.data.subscribe(val2 => {
      console.log(val2);
    });
  }

}
