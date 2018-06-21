import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfcLogMessagesComponent } from './cfc-log-messages.component';

describe('CfcLogMessagesComponent', () => {
  let component: CfcLogMessagesComponent;
  let fixture: ComponentFixture<CfcLogMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfcLogMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfcLogMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
