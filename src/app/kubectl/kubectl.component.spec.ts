import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KubectlComponent } from './kubectl.component';

describe('KubectlComponent', () => {
  let component: KubectlComponent;
  let fixture: ComponentFixture<KubectlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KubectlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KubectlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
