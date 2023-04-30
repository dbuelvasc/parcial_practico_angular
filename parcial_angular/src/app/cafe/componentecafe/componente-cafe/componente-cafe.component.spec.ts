import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCafeComponent } from './componente-cafe.component';

describe('ComponenteCafeComponent', () => {
  let component: ComponenteCafeComponent;
  let fixture: ComponentFixture<ComponenteCafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteCafeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
