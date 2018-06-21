import { Component, OnInit } from '@angular/core';

import { CfcLoginServiceService }   from '../services/auth/cfc-login-service.service';
@Component({
  selector: 'app-cfc-upbar',
  templateUrl: './cfc-upbar.component.html',
  styleUrls: ['./cfc-upbar.component.css']
})
export class CfcUpbarComponent implements OnInit {

  cfcLogoPath         = "assets/img/cfc_main_logo.png";
  cfcLogoSignInPath   = "assets/img/cfc_user_icon.png";
  cfcLogoMenuPath     = "assets/img/cfc_menu_icon.png";

  userLogged          = "sign";

  userMenuItems       = [
    {label : 'profile' , action: 'nothing'}, 
    {label : 'Achievements' , action: 'nothing'},
    {label : 'sign out' , action: 'signOut'}];
  constructor(private loginService : CfcLoginServiceService ) { }

  ngOnInit() {
    this.userLogged = this.loginService.getLoggedUserName();
  }

  clickedOn(index : number):void{
    // console.log('clicked ' + this.userMenuItems[index].action);
    this[this.userMenuItems[index].action](); // call the function ! 
    
  }

  signOut() {
    this.loginService.logout();
  }

  nothing() {
    console.log('method nothing')
  }
  
}
