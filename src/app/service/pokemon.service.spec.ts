import { TestBed } from '@angular/core/testing';

import * as pokemonService from './pokemon.service';

describe('ServiceService', () => {
  let service: pokemonService.PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(pokemonService.PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
