import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupDatailComponent } from './startup-datail.component';

describe('StartupDatailComponent', () => {
  let component: StartupDatailComponent;
  let fixture: ComponentFixture<StartupDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupDatailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
