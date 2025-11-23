import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsDetails } from './pokemons-details';

describe('PokemonsDetails', () => {
  let component: PokemonsDetails;
  let fixture: ComponentFixture<PokemonsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonsDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonsDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
