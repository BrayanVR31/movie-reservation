import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionMovie } from './collection-movie';

describe('CollectionMovie', () => {
  let component: CollectionMovie;
  let fixture: ComponentFixture<CollectionMovie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionMovie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionMovie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
