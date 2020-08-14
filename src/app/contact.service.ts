import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

 
  constructor(private http: HttpClient) { }
  private url = 'http://localhost:3000/contacts';
  getContacts(){
    return this.http.get(this.url);
  }

  createContact (form){
    const   httpHeaders = new HttpHeaders;
    httpHeaders.append('content-type', 'application/json');
    return this.http.post(this.url, form, {'headers': httpHeaders});
  }

  updateContact(id, form){
    let url = `${this.url}/${id}`;
    const   httpHeaders = new HttpHeaders;
    httpHeaders.append('content-type', 'application/json');

    return this.http.put(url, form, {headers:httpHeaders});

  }

  deleteContact(id){
    let url = `${this.url}/${id}`;
  
    return this.http.delete(url);

  }
    searchContact(id){
      let httpParams = new HttpParams({
        fromObject :{
          id: ['2',`${id}`]
        }
      });
      
      httpParams = httpParams.append('id', '3');
      console.log(httpParams.toString());


      return this.http.get(this.url, {params: httpParams });
    }


}
