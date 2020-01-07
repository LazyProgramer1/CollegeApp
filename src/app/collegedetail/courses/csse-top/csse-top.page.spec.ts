import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CSSETopPage } from './csse-top.page';

describe('CSSETopPage', () => {
  let component: CSSETopPage;
  let fixture: ComponentFixture<CSSETopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSSETopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CSSETopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
