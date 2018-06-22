import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cfc-user-achievements-components',
  templateUrl: './cfc-user-achievements-components.component.html'
})
export class CfcUserAchievementsComponentsComponent implements OnInit {

  // data comes from the constructor call
  // see CfcMainComponentContainer (cfc-main-component-container.ts)
  @Input() data       : any;

  private userLogged : string;
  constructor() { }
  
  ngOnInit() { 
    console.log(' user profile with : ' + this.data.userLoggedName);
    this.userLogged = this.data.userLoggedName;
  }

}
