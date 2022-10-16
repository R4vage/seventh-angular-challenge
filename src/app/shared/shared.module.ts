import { SpinnerComponent } from './components/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { WarningModalComponent } from './components/warning-modal/warning-modal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PaginationComponent,
    WarningModalComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    PaginationComponent,
    WarningModalComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
