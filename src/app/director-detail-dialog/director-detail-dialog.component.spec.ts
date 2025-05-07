import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorDetailDialogComponent } from './director-detail-dialog.component';

describe('DirectorDetailDialogComponent', () => {
  let component: DirectorDetailDialogComponent;
  let fixture: ComponentFixture<DirectorDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorDetailDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
