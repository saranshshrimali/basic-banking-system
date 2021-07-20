import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransferComponent } from './transfer/transfer.component';
import { TransferhistoryComponent } from './transferhistory/transferhistory.component';
import { ViewallcustomerComponent } from './viewallcustomer/viewallcustomer.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"viewallcustomer",component:ViewallcustomerComponent},
  {path:"transferhistory",component:TransferhistoryComponent},
  {path:"transfer/:id",component:TransferComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
