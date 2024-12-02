import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrizNumero4Component } from './matriz-numero-4.component';

describe('MatrizNumero4Component', () => {
  let component: MatrizNumero4Component;
  let fixture: ComponentFixture<MatrizNumero4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrizNumero4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrizNumero4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
