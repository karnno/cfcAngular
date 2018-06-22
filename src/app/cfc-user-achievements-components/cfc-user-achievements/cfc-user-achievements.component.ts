import { Component, OnInit, Input } from '@angular/core';

import { CfcLoginServiceService }   from '../../services/auth/cfc-login-service.service';


@Component({
  selector: 'app-cfc-user-achievements',
  templateUrl: './cfc-user-achievements.component.html'
})
export class CfcUserAchievementsComponent implements OnInit {

  @Input() userLogged  : string;
  constructor(private loginService : CfcLoginServiceService) { }

  ngOnInit() {
     
  }


}
