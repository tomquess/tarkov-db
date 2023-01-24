import { compileClassMetadata } from '@angular/compiler';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { filter, tap, map, pipe, take } from 'rxjs';
import { GET_ITEMS } from '../../graphql/graphql.queries';

import { Item } from 'src/app/models/item';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: any[] = [];
  loading: boolean = true;
  error: boolean;
  search?: string = ' ';
  @Input() totalItems: number;
  @Input() itemsPerPage: number = 20;
  @Input() totalItemsString: string;
  totalPages: number;
  constructor(private apollo: Apollo) {}

  // getData() {
  //   this.apollo
  //     .watchQuery<any>({
  //       query: GET_ITEMS,
  //       variables: {
  //         search: this.search,
  //       },
  //     })

  //     .valueChanges
  //     .subscribe((result: any) => {
  //       this.items = result.data.items;
  //       this.loading = result.loading;
  //       this.error = result.error;
  //       this.totalItems = this.items.length;
  //     })
  // }

  async getPaginatedData() {
    this.apollo
      .watchQuery<any>({
        query: GET_ITEMS,
        variables: {
          search: this.search,
        },
      })

      .valueChanges.subscribe((result: any) => {
        this.items = result.data.items;
        this.error = result.error;
        this.totalItems = this.items.length;
        this.totalItemsString = String(this.totalItems);
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.loading = result.loading;
      });
  }

  // =============================================

  currentPage = 1;
  pages: any[] = [];

  ngOnInit() {
    this.getPaginatedData();
    this.getPages();
  }
  ngOnChanges() {
    this.pages = this.getPages();
  }
  getPages() {
    setTimeout(() => {
      console.log(this.totalPages);
      for (let i = this.currentPage; i <= this.currentPage + 10; i++) {
        this.pages.push(i);
      }
    }, 400);

    return this.pages;
  }

  goToPage(page: number) {
    this.currentPage = page;
    if (this.currentPage >= 6 && this.currentPage <= this.totalPages - 5) {
      this.pages = [];
      for (let i = this.currentPage - 5; i <= this.currentPage + 5; i++) {
        this.pages.push(i);
      }
    } else if (this.currentPage <= 6) {
      this.pages = [];
      for (let i = 1; i <= 11; i++) {
        this.pages.push(i);
      }
    }

    switch (this.currentPage) {
      case 147:
        this.pages = [];
        for (let i = this.currentPage - 9; i <= this.currentPage + 1; i++) {
          this.pages.push(i);
        }
        break;
      case 146:
        this.pages = [];
        for (let i = this.currentPage - 8; i <= this.currentPage + 2; i++) {
          this.pages.push(i);
        }
        break;
      case 145:
        this.pages = [];
        for (let i = this.currentPage - 7; i <= this.currentPage + 3; i++) {
          this.pages.push(i);
        }
        break;
      case 144:
        this.pages = [];
        for (let i = this.currentPage - 6; i <= this.currentPage + 4; i++) {
          this.pages.push(i);
        }
        break;
      default:
        break;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      if (this.currentPage >= 6 && this.currentPage <= this.totalPages - 5) {
        this.pages = [];
        for (let i = this.currentPage - 5; i <= this.currentPage + 5; i++) {
          this.pages.push(i);
        }
      }
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      if (this.currentPage >= 6 && this.currentPage <= this.totalPages - 5) {
        this.pages = [];
        for (let i = this.currentPage - 5; i <= this.currentPage + 5; i++) {
          this.pages.push(i);
        }
      }
    }
  }
}
