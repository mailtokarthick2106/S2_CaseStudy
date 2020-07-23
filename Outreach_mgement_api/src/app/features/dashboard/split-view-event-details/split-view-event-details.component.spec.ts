import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitViewEventDetailsComponent } from './split-view-event-details.component';

describe('SplitViewEventDetailsComponent', () => {
  let component: SplitViewEventDetailsComponent;
  let fixture: ComponentFixture<SplitViewEventDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitViewEventDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitViewEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
