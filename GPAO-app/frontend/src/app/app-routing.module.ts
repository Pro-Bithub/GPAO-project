import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostgresComponent } from './postgres.component';

const routes: Routes = [{ path: 'postgres', component: PostgresComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
