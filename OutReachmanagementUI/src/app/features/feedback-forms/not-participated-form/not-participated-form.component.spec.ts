import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotParticipatedFormComponent } from './not-participated-form.component';

describe('NotParticipatedFormComponent', () => {
  let component: NotParticipatedFormComponent;
  let fixture: ComponentFixture<NotParticipatedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotParticipatedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotParticipatedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
