import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAutoComponent } from './detalle-auto.component';

describe('DetalleAutoComponent', () => {
  let component: DetalleAutoComponent;
  let fixture: ComponentFixture<DetalleAutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleAutoComponent]
    });
    fixture = TestBed.createComponent(DetalleAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
