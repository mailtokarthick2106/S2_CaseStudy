import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPocComponent } from './config-poc.component';

describe('ConfiPocComponent', () => {
  let component: ConfigPocComponent;
  let fixture: ComponentFixture<ConfigPocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigPocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
