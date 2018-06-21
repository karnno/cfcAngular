import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfcLoginComponent } from './cfc-login.component';

describe('CfcLoginComponent', () => {
  let component: CfcLoginComponent;
  let fixture: ComponentFixture<CfcLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfcLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfcLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
