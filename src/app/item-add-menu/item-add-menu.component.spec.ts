import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAddMenuComponent } from './item-add-menu.component';

describe('ItemAddMenuComponent', () => {
  let component: ItemAddMenuComponent;
  let fixture: ComponentFixture<ItemAddMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAddMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAddMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
