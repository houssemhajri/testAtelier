import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { Player } from 'src/Core/Models/player.Modal';
import { HomeComponent } from '../home.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AppServicesService } from 'src/Core/Services/app-services.service';

fdescribe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      providers: [HttpClient, AppServicesService, HttpHandler],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    let testHome = TestBed.createComponent(HomeComponent);
    let testHostComponent = testHome.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnInit();
    let player = {
      firtstname: 'Novak',
      age: '52',
      lastname: 'Djokovic',
      picture:
        'https://data.latelier.co/training/tennis_stats/resources/Djokovic.png',
      sex: 'M',
      shortname: 'N.DJO',
    };

    component.player = player;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
