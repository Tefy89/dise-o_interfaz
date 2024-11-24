import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizNumero3Component } from './matriz-numero-3.component';

describe('MatrizNumero3Component', () => {
  let component: MatrizNumero3Component;
  let fixture: ComponentFixture<MatrizNumero3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrizNumero3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrizNumero3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
