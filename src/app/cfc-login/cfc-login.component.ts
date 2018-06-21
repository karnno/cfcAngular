import { Component, OnInit } from '@angular/core';

import { CfcLoginServiceService}  from '../services/auth/cfc-login-service.service';

@Component({
  selector: 'app-cfc-login',
  templateUrl: './cfc-login.component.html',
  styleUrls: ['./cfc-login.component.css']
})
export class CfcLoginComponent implements OnInit {

  constructor(private loginService : CfcLoginServiceService) { }

  ngOnInit() {
    // would be interesting to get the user name - pass from session :D
  }

  clear():void {
    console.log('click on clear button');
  }

  login(username : string, userpass : string) : void {
    // console.log('component : you entered ' + username + ' and ' + userpass);
    this.loginService.checkLogin(username, userpass);
  }

  keyUp(event : any):void{

  }
}
