import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInterpilationComponent } from './string-interpilation.component';

describe('StringInterpilationComponent', () => {
  let component: StringInterpilationComponent;
  let fixture: ComponentFixture<StringInterpilationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringInterpilationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringInterpilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
