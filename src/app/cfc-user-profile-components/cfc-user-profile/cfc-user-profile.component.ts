import { Component, OnInit, Input } from '@angular/core';

import { CfcLoginServiceService }   from '../../services/auth/cfc-login-service.service';

@Component({
  selector: 'app-cfc-user-profile',
  templateUrl: './cfc-user-profile.component.html',
  styleUrls: ['./cfc-user-profile.component.css']
})
export class CfcUserProfileComponent implements OnInit {

  

  @Input() userLogged  : string;
  constructor(private loginService : CfcLoginServiceService) { }

  ngOnInit() {
    
  }

}
