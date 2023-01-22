import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private apollo: Apollo) {}

  getItemsList(search: string){
    console.log(search);
  }

}
