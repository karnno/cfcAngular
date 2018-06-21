import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfcChatMessagesComponent } from './cfc-chat-messages.component';

describe('CfcChatMessagesComponent', () => {
  let component: CfcChatMessagesComponent;
  let fixture: ComponentFixture<CfcChatMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfcChatMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfcChatMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
