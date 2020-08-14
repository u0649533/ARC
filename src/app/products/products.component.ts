import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private authService: AuthserviceService) { }
  @Output() username = new EventEmitter<string>();
  @Output() password = new EventEmitter<string>();
  isLogged:boolean = true;

  submit(un:string , pw:string){
    this.authService.un = un;
    this.authService.pw = pw;
    this.isLogged = !this.isLogged;
    console.log(this.isLogged);
  }

  logOut(){
    this.authService.isLoggedOut = true;
    this.isLogged = !this.isLogged;
    console.log(this.isLogged);
  }
  ngOnInit(): void {
  }

}
