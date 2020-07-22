import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPmoComponent } from './config-pmo.component';

describe('ConfigPmoComponent', () => {
  let component: ConfigPmoComponent;
  let fixture: ComponentFixture<ConfigPmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigPmoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigPmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
