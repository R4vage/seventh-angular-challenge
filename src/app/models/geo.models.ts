export interface Country {
    name: string,
    Iso2?: string,
    Iso3?: string,
    Iso4?: string,
  }

export interface State {
    name: string,
    state_code: string
}

export interface CountryWithStates extends Country{
    states: State[]
}