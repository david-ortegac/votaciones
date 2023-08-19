import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuorumPage } from './quorum.page';

describe('QuorumPage', () => {
  let component: QuorumPage;
  let fixture: ComponentFixture<QuorumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuorumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
