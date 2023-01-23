import { compileClassMetadata } from '@angular/compiler';
import { Component, OnInit, Input ,OnDestroy } from '@angular/core';
import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { filter, tap, map } from 'rxjs';
import { GET_ITEMS } from '../../graphql/graphql.queries';

import { Item } from 'src/app/models/item';


import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  items: any[] = [];
  loading: boolean = true;
  error: boolean;
  search?: string = " ";

  constructor(private apollo: Apollo) {}

 



  getData() {
    this.apollo.watchQuery<any>({
      query: GET_ITEMS,
      variables: {
        search: this.search
      },
      })
        .valueChanges
        .subscribe((result: any) => {
          console.log(result);
          this.items = result.data.items;
          this.loading = result.loading;
          this.error = result.error;
          console.log(this.items);
        });
  }
  

  ngOnInit() {
    console.log(this.search);
    this.getData();
  }
  
 
}
