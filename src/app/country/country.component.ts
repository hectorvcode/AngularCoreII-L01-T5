import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from '../country-service.service';
import { CountryI } from '../country.interface';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})


export class CountryComponent implements OnInit {

  countries: CountryI[] = [];

  newCountry = {
    name: "", 
    capital: ""
  }

  constructor(private CountrySrv: CountryServiceService) { }

  ngOnInit() {
    this.CountrySrv.getAllCities().subscribe(data => this.countries = data);
  }

  //myFunction() {
  //  console.log(`Name ${this.formulario.name} Capital ${this.formulario.capital}`);
  //}

  public saveCountry():void{
    
    this.newCountry.capital = this.newCountry.capital + 'City'
    this.countries.push(this.newCountry);
    
  }


}
