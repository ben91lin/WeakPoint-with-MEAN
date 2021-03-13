import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationMetaComponent } from './presentation-meta.component';

describe('PresentationMetaComponent', () => {
  let component: PresentationMetaComponent;
  let fixture: ComponentFixture<PresentationMetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationMetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
