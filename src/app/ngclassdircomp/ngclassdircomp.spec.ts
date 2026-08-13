import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngclassdircomp } from './ngclassdircomp';

describe('Ngclassdircomp', () => {
  let component: Ngclassdircomp;
  let fixture: ComponentFixture<Ngclassdircomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngclassdircomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ngclassdircomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
