import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreDetailDialogComponent } from './genre-detail-dialog.component';

describe('GenreDetailDialogComponent', () => {
  let component: GenreDetailDialogComponent;
  let fixture: ComponentFixture<GenreDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenreDetailDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
