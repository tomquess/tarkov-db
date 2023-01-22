
import { OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {


  constructor(private router: Router) { }
  ngOnInit(): void {
  }


  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search]);
  }

}
