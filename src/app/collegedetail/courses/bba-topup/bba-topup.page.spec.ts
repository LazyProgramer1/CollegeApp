import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BBATopupPage } from './bba-topup.page';

describe('BBATopupPage', () => {
  let component: BBATopupPage;
  let fixture: ComponentFixture<BBATopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBATopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BBATopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
