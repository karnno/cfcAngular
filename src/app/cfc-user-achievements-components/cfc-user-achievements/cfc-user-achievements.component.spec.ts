import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfcUserAchievementsComponent } from './cfc-user-achievements.component';

describe('CfcUserAchievementsComponent', () => {
  let component: CfcUserAchievementsComponent;
  let fixture: ComponentFixture<CfcUserAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfcUserAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfcUserAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
