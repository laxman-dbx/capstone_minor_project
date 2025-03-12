import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyUserPiiComponent } from './verify-user-pii.component';

describe('VerifyUserPiiComponent', () => {
  let component: VerifyUserPiiComponent;
  let fixture: ComponentFixture<VerifyUserPiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyUserPiiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyUserPiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
