import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pag5Page } from './pag5.page';

describe('Pag5Page', () => {
  let component: Pag5Page;
  let fixture: ComponentFixture<Pag5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pag5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
