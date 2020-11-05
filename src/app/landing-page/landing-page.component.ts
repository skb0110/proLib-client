import { Component, OnInit } from '@angular/core';
class search {
  searchText: string;
}

@Component({ 
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']

})
export class LandingPageComponent implements OnInit {

  constructor( ) {
  }
  
  ngOnInit() {
  }

  onSubmit(srachForm: any){
    console.log('input search value:'+ JSON.stringify(srachForm.form.value));
  }
    
}