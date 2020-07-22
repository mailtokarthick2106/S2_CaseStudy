import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAdminComponent } from './config-admin.component';

describe('ConfigAdminComponent', () => {
  let component: ConfigAdminComponent;
  let fixture: ComponentFixture<ConfigAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
