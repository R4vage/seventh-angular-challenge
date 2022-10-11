import { ProfilesComponent } from './profiles/profiles.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "profiles", component: ProfilesComponent},
  {path: "user-form", component: UserFormComponent},
  {path: '', redirectTo: '/profiles', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
