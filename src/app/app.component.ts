import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'countryApp';
  
  constructor(public router: Router) {
    
  }
  
  queryParams() { 
    //this.router.navigate(['countries'], { queryParams: { name: 'colombia' } }) 
    this.router.navigate(['countries'], { queryParams: {city: 'medellin', currency: 'COP' } })
  }

  onClick(action: boolean) {
    sessionStorage.setItem('authenticated', action ? "true" : "false");
    if(action === false){
      this.router.navigate(['/'])
    }
  }
}



