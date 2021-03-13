import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarGridComponent } from './sidebar-grid.component';

describe('SidebarGridComponent', () => {
  let component: SidebarGridComponent;
  let fixture: ComponentFixture<SidebarGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
