import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.css']
})
export class ProductIdComponent implements OnInit {

  productId = 0;
    constructor(private activatedRoute: ActivatedRoute){ 
      this.activatedRoute.params.subscribe(res =>{
        this.productId = res.id;
      });
    }

  ngOnInit(): void {
  }

}
