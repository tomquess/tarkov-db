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
  posts: any;
  loading: boolean;

  string: string = 'dsada';
 
  constructor(private apollo: Apollo) {}
  private querySubscription: Subscription;
 
  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
    query: GET_ITEMS
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.posts = data.posts;
        console.log(this.posts);
        
      });
  }
  
 
}
