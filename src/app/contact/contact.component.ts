import { Component, OnInit } from '@angular/core';
import {ContactService} from  '../contact.service';
import { off } from 'process';

// install and open json server to run mock server
// npm i --save json-server
// cd ./src/app/assets
// json-server --watch./db.json
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contactList : any;
newContact = {"id" :10, "title" : "manager", "author" : "kk"};
uContact = {"id" :10, "title" : "TT", "author" : "katie"};
message = "";
  constructor(private contactService : ContactService) { }

  createContact(form){
    let doExist = false;
    this.contactService.getContacts().subscribe(res =>{ this.contactList = res;  });
    for (var c of this.contactList) {
      if (form.id == c.id){
        doExist = true;
      }
   }
    if(doExist){
    this.message = "contact already exists no need to create a new one";
   }else{
    this.contactService.createContact(form).subscribe(req => {console.log("new contact added", req);} );
    this.message =  " added a new contact";

   }
  }


  updateContact(form){
    //check id exists
    let doExist = false;
    this.contactService.getContacts().subscribe(res =>{ this.contactList = res;  });
    for (var c of this.contactList) {
      if (form.id == c.id){
        doExist = true;
      }
   }
    
    if(doExist){
      this.contactService.updateContact(form.id, form).subscribe(req => {console.log("update contact added", req);});
      this.message =  "updated contact";
    }else{
      this.message =  "please add contact first";
      console.log("please add contact first");
    }

  }

  deleteContact(id){
    //check id exists
    let doExist = false;
    this.contactService.getContacts().subscribe(res =>{ this.contactList = res;  });
    for (var c of this.contactList) {
      if (id == c.id){
        doExist = true;
      }
   }

    if(doExist) {
     this.contactService.deleteContact(id).subscribe(req => {console.log("successfully deleted", req)});
     this.message =  "contact deleted";
   }else{
    console.log("contact has already gone");
    this.message =  "contact never exists. No need to delete";
   }

  }


  searchContact(id){
    let doExist = false;
    this.contactService.getContacts().subscribe(res =>{ this.contactList = res;  });
    for (var c of this.contactList) {
      if (id == c.id){
        doExist = true;
      }
   }

    if(doExist) {
     this.contactService.searchContact(id).subscribe(req => {console.log("successfully find", req)});
     this.message =  `contact # ${id} found`;
   }else{
    this.message =  "No such contact exists";
   }


  }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe(res =>{ this.contactList = res;
                                                        console.log(this.contactList);
    });
}

}
 