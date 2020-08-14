import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  v = '';
  constructor(private formBuilder : FormBuilder) {
    this.checkoutForm = formBuilder.group({
    emailAddr: ['', [ Validators.minLength(5), Validators.required,  Validators.email ]],
    quantity: ['', Validators.required],
    terms: new FormControl()
    }
    );
   }

   
   postData(){

    console.log(this.checkoutForm.value);
    this.checkoutForm.reset();
   }
   
  

  resetForm(){
     this.checkoutForm.reset();
   }
  
  ngOnInit(): void {
    // status changes
    /*this.checkoutForm.get('emailAddr').statusChanges.subscribe(res => {
      console.log(res);});*/
      this.checkoutForm.statusChanges.subscribe(res => {
        console.log(res);});

        //value changes
      this.checkoutForm.get('emailAddr').valueChanges.subscribe(res => {
          this.v = res;});
  

  }

}
