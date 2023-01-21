import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Subscription, Observable, map } from 'rxjs';
import { GET_ITEMS } from '../../graphql/graphql.queries';

import { item, Query} from '../../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  items: Observable<item[]>;
 
  constructor(private apollo: Apollo) {}
 
  ngOnInit() {
    this.items = this.apollo.watchQuery<Query>({
      query: GET_ITEMS
    })
      .valueChanges
      .pipe(
        map(result => result.data.allitems)
      );

      console.log(this.items);
  }

 
}
