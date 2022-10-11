import { UserFormModule } from './user-form/user-form.module';
import { ProfilesModule } from './profiles/profiles.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    ProfilesModule,
    UserFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
