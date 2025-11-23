import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokedle } from './pokedle';

describe('Pokedle', () => {
  let component: Pokedle;
  let fixture: ComponentFixture<Pokedle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pokedle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pokedle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
