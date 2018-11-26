import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiresultComponent } from './apiresult.component';

describe('ApiresultComponent', () => {
  let component: ApiresultComponent;
  let fixture: ComponentFixture<ApiresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
