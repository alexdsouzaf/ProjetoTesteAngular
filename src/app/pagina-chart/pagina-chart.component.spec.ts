import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaChartComponent } from './pagina-chart.component';

describe('PaginaChartComponent', () => {
  let component: PaginaChartComponent;
  let fixture: ComponentFixture<PaginaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
