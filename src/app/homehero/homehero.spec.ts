import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homehero } from './homehero';

describe('Homehero', () => {
  let component: Homehero;
  let fixture: ComponentFixture<Homehero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Homehero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homehero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
