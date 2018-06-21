import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfcUpbarComponent } from './cfc-upbar.component';

describe('CfcUpbarComponent', () => {
  let component: CfcUpbarComponent;
  let fixture: ComponentFixture<CfcUpbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfcUpbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfcUpbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
