import { Animations } from './../shared/animations/animations';
import { Country, State } from './../models/geo.models';
import { GeoService } from './geo.service';
import { UserValidators } from './user-form.validators';
import { UserField } from './../models/user.models';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  animations: [Animations.fadeIn, Animations.fromLeftToRight],
  providers: [
    GeoService
  ],
})
export class UserFormComponent implements OnInit{
  countries: Country[] = []
  states: State[] = [] 
  modalOpened = false
  constructor(private geoService: GeoService) { 
  }

  ngOnInit(): void {
    this.geoService.getCountries().subscribe({
      next: (response) => this.countries = response.data,
      error: (error) => console.log(error)
    })
  }
  
  userForm = new FormGroup ({
    name : new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    lastName: new FormControl('' , [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      Validators.minLength(4),
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{1,}$/),
      Validators.minLength(8),
      Validators.maxLength(40)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
    ]),
    birthDate: new FormControl('', [
      Validators.required,
      UserValidators.GreaterThanToday
    ]),
    telephoneNumber: new FormControl('', [
      Validators.minLength(5),
      Validators.maxLength(30),
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    personalSiteUrl: new FormControl('', [
      Validators.minLength(5),
      Validators.maxLength(50),
      Validators.pattern(/^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/)
    ]),
    aboutMe: new FormControl('', [
      Validators.maxLength(80)
    ]),
    gender: new FormControl('', [
      Validators.required
    ]),
    country: new FormControl('', [
      Validators.required
    ]),
    state: new FormControl('', [
      Validators.required
    ]),
    adress: new FormControl('', [
      Validators.required
    ]),
    agree: new FormControl('', [
      Validators.requiredTrue
    ])
  })

  changeStates() {
    this.states = []
    let country = this.userForm.controls['country'].value
    if (country!== null) {
      this.geoService.getStates(country).subscribe({
        next: (response) => {this.states = response.data.states},
        error: (error) => console.log(error),
      })
    } 
  }

  getTodayString() {
    return new Date().toISOString().split('T')[0];
  }

  onSubmit(){
    this.modalOpened = true
    console.log(this.userForm.value)
  }

  getField (field:UserField) {
    return this.userForm.get(field)
  }

  closeModal(){
    this.modalOpened = false
  }
}
