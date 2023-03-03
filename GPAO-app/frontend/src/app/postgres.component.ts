import { Component, OnInit } from '@angular/core';
import { PostgresService } from './postgres.service';

@Component({
  selector: 'app-postgres',
  templateUrl: './postgres.component.html',
  styleUrls: ['./postgres.component.css']
})

export class PostgresComponent implements OnInit {

    constructor(
      private postgresService: PostgresService
    ) { }
  
    ngOnInit() {
        this.postToPostgres()
    }
  
    postToPostgres() {
      this.postgresService.postgres().subscribe(Response => {
        console.log("Response")
        console.log(Response)
        //TODO: Handle response
      });
    }
  
  }