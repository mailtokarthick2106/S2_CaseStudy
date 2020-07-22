import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipatedFormComponent } from './participated-form.component';

describe('ParticipatedFormComponent', () => {
  let component: ParticipatedFormComponent;
  let fixture: ComponentFixture<ParticipatedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipatedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipatedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
