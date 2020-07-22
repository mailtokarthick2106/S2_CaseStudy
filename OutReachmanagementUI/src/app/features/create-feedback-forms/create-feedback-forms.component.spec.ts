import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFeedbackFormsComponent } from './create-feedback-forms.component';

describe('CreateFeedbackFormsComponent', () => {
  let component: CreateFeedbackFormsComponent;
  let fixture: ComponentFixture<CreateFeedbackFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFeedbackFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFeedbackFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
