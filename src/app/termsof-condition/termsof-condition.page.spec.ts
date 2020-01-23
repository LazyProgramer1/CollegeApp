import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TermsofConditionPage } from './termsof-condition.page';

describe('TermsofConditionPage', () => {
  let component: TermsofConditionPage;
  let fixture: ComponentFixture<TermsofConditionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsofConditionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TermsofConditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
