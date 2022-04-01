import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupListagemComponent } from './startup-listagem.component';

describe('StartupListagemComponent', () => {
  let component: StartupListagemComponent;
  let fixture: ComponentFixture<StartupListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupListagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
