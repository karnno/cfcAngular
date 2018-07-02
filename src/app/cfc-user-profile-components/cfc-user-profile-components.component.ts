import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cfc-user-profile-components',
  templateUrl: './cfc-user-profile-components.component.html'
})
export class CfcUserProfileComponentsComponent implements OnInit {

  @Input() data       : any;

  private userLogged : string;
  constructor(public activeModal: NgbActiveModal) { }
  
  ngOnInit() { 
    console.log(' user profile with : ' + this.data.userLoggedName);
    this.userLogged = this.data.userLoggedName;
  }
  
  }