import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizNumero6Component } from './matriz-numero-6.component';

describe('MatrizNumero6Component', () => {
  let component: MatrizNumero6Component;
  let fixture: ComponentFixture<MatrizNumero6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrizNumero6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrizNumero6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
