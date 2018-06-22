import { Component, OnInit, Output, EventEmitter, HostListener, Input  } from '@angular/core';

//import { CfcLoginServiceService }   from '../services/auth/cfc-login-service.service';

/*

  the navigation bar will throw event to the parent (cfc-main-page)

  angular tutorial : https://angular.io/guide/component-interaction#parent-listens-for-child-event
  other page       : https://medium.com/dailyjs/3-ways-to-communicate-between-angular-components-a1e3f3304ecb

*/
@Component({
  selector: 'app-cfc-upbar',
  templateUrl: './cfc-upbar.component.html',
  styleUrls: ['./cfc-upbar.component.css']
})
export class CfcUpbarComponent implements OnInit {

  // the logged user's name, injected by parent 
  @Input() userLoggedInName : string; 

  // the event to emit out to be caught by parent :)
  // NB : be careful to use the same name of event inside the listener's template
  @Output() menuEventFromUpbar: EventEmitter<string> = new EventEmitter();

  cfcLogoPath         = "assets/img/cfc_main_logo.png";
  cfcLogoSignInPath   = "assets/img/cfc_user_icon.png";
  cfcLogoMenuPath     = "assets/img/cfc_menu_icon.png";

  userLogged          = "..";

  userMenuItems       = [
    {label : 'Profile'        , action: 'profile'}, 
    {label : 'Achievements'   , action: 'achievements'},
    {label : 'Play'           , action: 'play'},
    {label : 'Sign out'       , action: 'signout'}];

  

  // constructor(private loginService : CfcLoginServiceService ) { }
  constructor() { }



  ngOnInit() {
    //this.userLogged = this.loginService.getLoggedUserName();
    this.userLogged = this.userLoggedInName;
  }

  clickedOn(index : number):void{
    console.log('upbar : clicked ' + this.userMenuItems[index].action);
    //this[this.userMenuItems[index].action](); // call the function ! 
    
    this.menuEventFromUpbar.emit(this.userMenuItems[index].action);
  }

  // signOut() {
  //   this.loginService.logout();
  // }

  // nothing() {
  //   console.log('method nothing')
  // }

}
