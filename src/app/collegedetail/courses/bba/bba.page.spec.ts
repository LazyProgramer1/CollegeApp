import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BBAPage } from './bba.page';

describe('BBAPage', () => {
  let component: BBAPage;
  let fixture: ComponentFixture<BBAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BBAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
