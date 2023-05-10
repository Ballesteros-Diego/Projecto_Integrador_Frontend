import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLogoAPComponent } from './component-logo-ap.component';

describe('ComponentLogoAPComponent', () => {
  let component: ComponentLogoAPComponent;
  let fixture: ComponentFixture<ComponentLogoAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLogoAPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLogoAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
