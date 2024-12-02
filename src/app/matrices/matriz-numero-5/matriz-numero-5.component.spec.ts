import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizNumero5Component } from './matriz-numero-5.component';

describe('MatrizNumero5Component', () => {
  let component: MatrizNumero5Component;
  let fixture: ComponentFixture<MatrizNumero5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrizNumero5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrizNumero5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
