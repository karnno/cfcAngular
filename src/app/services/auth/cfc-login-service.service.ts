import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router }     from '@angular/router';

import { User }       from './user';


@Injectable()
export class CfcLoginServiceService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private loggedUserName : string;
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router : Router) { }

  checkLogin (formUser:string, formPass : string):void {

    console.log('cfc login service  : you entered ' + formUser + ' and ' + formPass);
    // if( formUser == 'test' && formPass == 'pass') {
    //   alert('ok');
    //   this.loggedIn.next(true);
    //   this.router.navigate(['/']);

    // }


    let  aUser = new CfcUser(formUser, formPass) ;
    this.login(aUser);
  }


  login(user: User) {
    if (user.userName !== '' && user.password !== '' ) {
      this.loggedUserName = user.userName ;
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.loggedUserName = '';
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }


  getLoggedUserName() {
    return this.loggedUserName ;
  }

}

/*
  inner class :-D 
*/
class CfcUser {
   
  constructor(public userName: string, public password: string) {
      
  }
}