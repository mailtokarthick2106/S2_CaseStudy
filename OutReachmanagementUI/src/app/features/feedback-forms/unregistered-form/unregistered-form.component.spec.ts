import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisteredFormComponent } from './unregistered-form.component';

describe('UnregisteredFormComponent', () => {
  let component: UnregisteredFormComponent;
  let fixture: ComponentFixture<UnregisteredFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnregisteredFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregisteredFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
