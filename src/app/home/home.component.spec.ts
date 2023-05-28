import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { HomeComponent } from './home.component';
import { AppServicesService } from 'src/Core/Services/app-services.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [HttpClient, AppServicesService, HttpHandler],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should show players ', () => {
    component.ngOnInit();
    const card: HTMLElement =
      fixture.nativeElement.querySelectorAll('.card-title');
    expect(card).toBeDefined;
  });
});
