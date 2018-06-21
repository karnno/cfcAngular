import { Component, OnInit } from '@angular/core';

import { CfcPlayMainPanelComponent }      from './cfc-play-main-panel/cfc-play-main-panel.component';
import { CfcLogMessagesComponent }        from './cfc-log-messages/cfc-log-messages.component';
import { CfcChatMessagesComponent }       from './cfc-chat-messages/cfc-chat-messages.component';

@Component({
  selector: 'app-cfc-play-components',
  templateUrl: './cfc-play-components.component.html'
})
export class CfcPlayComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
  }

}
