import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEventDetailsComponent } from './view-event-details.component';

describe('ViewEventDetailsComponent', () => {
  let component: ViewEventDetailsComponent;
  let fixture: ComponentFixture<ViewEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
