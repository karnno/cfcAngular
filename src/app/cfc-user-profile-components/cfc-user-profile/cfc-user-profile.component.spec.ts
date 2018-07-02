import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfcUserProfileComponent } from './cfc-user-profile.component';

describe('CfcUserProfileComponent', () => {
  let component: CfcUserProfileComponent;
  let fixture: ComponentFixture<CfcUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfcUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfcUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
