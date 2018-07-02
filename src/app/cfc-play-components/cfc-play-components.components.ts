import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cfc-play-components',
  templateUrl: './cfc-play-components.component.html'
})
export class CfcPlayComponentsComponent implements OnInit {

  // data comes from the constructor call
  // see CfcMainComponentContainer (cfc-main-component-container.ts)
  @Input() data       : any;

  private userLogged : string;
  constructor() { }
  
  ngOnInit() { 
    console.log(' init play components with user : ' + this.data.userLoggedName);
    this.userLogged = this.data.userLoggedName;
  }
}
