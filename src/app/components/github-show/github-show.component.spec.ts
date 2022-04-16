import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubShowComponent } from './github-show.component';

describe('GithubShowComponent', () => {
  let component: GithubShowComponent;
  let fixture: ComponentFixture<GithubShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
