import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente7Component } from './componente7.component';

describe('Componente7Component', () => {
  let component: Componente7Component;
  let fixture: ComponentFixture<Componente7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
