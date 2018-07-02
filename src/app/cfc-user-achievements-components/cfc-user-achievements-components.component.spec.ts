import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfcUserAchievementsComponentsComponent } from './cfc-user-achievements-components.component';

describe('CfcUserAchievementsComponentsComponent', () => {
  let component: CfcUserAchievementsComponentsComponent;
  let fixture: ComponentFixture<CfcUserAchievementsComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfcUserAchievementsComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfcUserAchievementsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
