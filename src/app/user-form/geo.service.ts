import { Country, State, CountryWithStates } from './../models/geo.models';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface CountryResponse {
  error: boolean,
  msg: string,
  data: Country[]
}

interface StateResponse {
  error: boolean,
  msg: string,
  data: CountryWithStates
}

@Injectable()
export class GeoService {
  constructor(private http: HttpClient) { }

  getCountries () {
    return this.http.get<CountryResponse>("https://countriesnow.space/api/v0.1/countries/iso");
  }

  getStates (country: string) {
    return this.http.post<StateResponse>("https://countriesnow.space/api/v0.1/countries/states", {country})
  }
}
