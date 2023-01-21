import { compileClassMetadata } from '@angular/compiler';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Subscription, Observable, map, toArray } from 'rxjs';
import { GET_ITEMS } from '../../graphql/graphql.queries';


import { item, Query} from '../../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  items: any[] = [];
  loading: true;
  error: any;

  string: string = 'dsada';
 
  constructor(private apollo: Apollo) {}
 
  ngOnInit() {
    this.apollo.watchQuery<any>({
    query: GET_ITEMS
    })
      .valueChanges
      .subscribe((result: any) => {
        this.items = result.data.items;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
  
 
}
