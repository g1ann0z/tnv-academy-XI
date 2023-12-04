import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionalComponent } from './nutritional.component';

describe('NutritionalComponent', () => {
  let component: NutritionalComponent;
  let fixture: ComponentFixture<NutritionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutritionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
