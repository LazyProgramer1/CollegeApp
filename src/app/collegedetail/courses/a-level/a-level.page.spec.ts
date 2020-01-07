import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ALevelPage } from './a-level.page';

describe('ALevelPage', () => {
  let component: ALevelPage;
  let fixture: ComponentFixture<ALevelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALevelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ALevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
