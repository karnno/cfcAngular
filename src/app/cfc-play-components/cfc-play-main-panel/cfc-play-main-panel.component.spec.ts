import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfcPlayMainPanelComponent } from './cfc-play-main-panel.component';

describe('CfcPlayMainPanelComponent', () => {
  let component: CfcPlayMainPanelComponent;
  let fixture: ComponentFixture<CfcPlayMainPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfcPlayMainPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfcPlayMainPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
