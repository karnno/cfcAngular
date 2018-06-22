import { BrowserModule }                  from '@angular/platform-browser';
import { NgModule }                       from '@angular/core';
import { FormsModule }                    from '@angular/forms';
import { AppRoutingModule }               from './/app-routing.module';
import { NgbModule }                      from "@ng-bootstrap/ng-bootstrap";

import { AppComponent }                   from './app.component';
import { CfcLoginComponent }              from './cfc-login/cfc-login.component';
import { CfcUpbarComponent }              from './cfc-upbar/cfc-upbar.component';

import { CfcPlayMainPanelComponent }      from './cfc-play-components/cfc-play-main-panel/cfc-play-main-panel.component';
import { CfcLogMessagesComponent }        from './cfc-play-components/cfc-log-messages/cfc-log-messages.component';
import { CfcChatMessagesComponent }       from './cfc-play-components/cfc-chat-messages/cfc-chat-messages.component';
import { CfcPlayComponentsComponent }      from './cfc-play-components/cfc-play-components.components';


import { CfcMainPageComponent }           from './cfc-main-page/cfc-main-page.component';

import { CfcLoginServiceService}          from './services/auth/cfc-login-service.service';
import { AuthGuard }                      from './services/auth/auth.guard';

import { CfcMainContentDirective }        from './cfc-main-content.directive';
import { CfcUserProfileComponent }            from './cfc-user-profile-components/cfc-user-profile/cfc-user-profile.component';
import { CfcUserProfileComponentsComponent }  from './cfc-user-profile-components/cfc-user-profile-components.component';

import { CfcUserAchievementsComponentsComponent } from './cfc-user-achievements-components/cfc-user-achievements-components.component';
import { CfcUserAchievementsComponent }           from './cfc-user-achievements-components/cfc-user-achievements/cfc-user-achievements.component'; 


@NgModule({
  declarations: [
    AppComponent,
    CfcUpbarComponent,
    CfcPlayMainPanelComponent,
    CfcLogMessagesComponent,
    CfcChatMessagesComponent,
    CfcPlayComponentsComponent, 
    CfcLoginComponent,
    CfcMainPageComponent,
    CfcMainContentDirective,
    CfcUserProfileComponent,
    CfcUserProfileComponentsComponent,
    CfcUserAchievementsComponentsComponent,
    CfcUserAchievementsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    // ng bootstrap import is slightly different and uses the .forRoot() instruction
    NgbModule.forRoot()
  ],
  providers: [
    // make the cfc login service injectable elsewhere :D
    CfcLoginServiceService,
    AuthGuard
  ],
  entryComponents: [ 
    CfcPlayComponentsComponent, 
    CfcPlayMainPanelComponent, 
    CfcLogMessagesComponent, 
    CfcChatMessagesComponent,
  
    CfcUserProfileComponent,
    CfcUserProfileComponentsComponent,

    CfcUserAchievementsComponent,
    CfcUserAchievementsComponentsComponent
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
