import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {


  productId = 0;
    constructor(private activatedRoute: ActivatedRoute){ 
      this.activatedRoute.params.subscribe(res =>{
        this.productId = res.id;
      });
    }
  ngOnInit(): void {  
  
  }

}
