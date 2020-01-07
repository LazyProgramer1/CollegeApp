import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CSSEPage } from './csse.page';

describe('CSSEPage', () => {
  let component: CSSEPage;
  let fixture: ComponentFixture<CSSEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSSEPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CSSEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
