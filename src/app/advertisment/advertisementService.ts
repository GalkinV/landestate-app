import {Advertisment} from './advertisment.module';
import { Injectable, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class AdvertisementService implements OnInit{
  advertisementChanged = new Subject<Advertisment[]>();

  private advertisements: Advertisment[] = [
    new Advertisment(0, 'Central', 'Парк-отель, Калужское шоссе, 38 км от МКАД, НОВАЯ МОСКВА',
      'Продается парк-отель на участке 10,5Га (плюс 20 Га земли под дачное строительство или 8 Га земель поселений вдоль реки)',
      290000000, 'Rub', ['+10 495 782-41-64'],
      ['http://landestate.ru/img/p5fb0532831ebbfa9a0603e0e27feb10e-w1200-h800-te.jpg',
      'http://landestate.ru/img/pecbf88bc49ef3cad0b45b9bb1f7ad962-w1200-h800-te.jpg',
      'http://landestate.ru/img/pe14b684693b106703a73c2458700b672-w1200-h800-te.jpg',
      'http://landestate.ru/img/pe508436487dae0784d7b1fb579d355e8-w1200-h800-te.jpg',
        'http://landestate.ru/img/pecbf88bc49ef3cad0b45b9bb1f7ad962-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe14b684693b106703a73c2458700b672-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe508436487dae0784d7b1fb579d355e8-w1200-h800-te.jpg']),
    new Advertisment(1, 'Central', 'База отдыха на берегу Истринского водохранилища. Пятницкое шоссе 46км от МКАД',
      'Действующая база отдыха на берегу Истринского водохранилища. Своя пристань и песчаный пляж. Участок 3 Га (в аренде до 2053 года). На базе: 14 зимних домов, 15 летних домиков, ресторан, летний бар-веранда, баня с комнатами отдыха и бильярдом. Электричество, скважина.',
      290000000, 'Rub', ['+8 495 782-41-63'],
      ['http://landestate.ru/img/p5fb0532831ebbfa9a0603e0e27feb10e-w1200-h800-te.jpg',
        'http://landestate.ru/img/pecbf88bc49ef3cad0b45b9bb1f7ad962-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe14b684693b106703a73c2458700b672-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe508436487dae0784d7b1fb579d355e8-w1200-h800-te.jpg']),
    new Advertisment(2, 'Central', 'Парк-отель, Калужское шоссе, 38 км от МКАД, НОВАЯ МОСКВА',
      'Продается парк-отель на участке 10,5Га (плюс 20 Га земли под дачное строительство или 8 Га земель поселений вдоль реки)',
      290000000, 'Rub', ['+7 495 782-41-62'],
      ['http://landestate.ru/img/p5fb0532831ebbfa9a0603e0e27feb10e-w1200-h800-te.jpg',
        'http://landestate.ru/img/pecbf88bc49ef3cad0b45b9bb1f7ad962-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe14b684693b106703a73c2458700b672-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe508436487dae0784d7b1fb579d355e8-w1200-h800-te.jpg',
        'http://landestate.ru/img/pecbf88bc49ef3cad0b45b9bb1f7ad962-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe14b684693b106703a73c2458700b672-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe508436487dae0784d7b1fb579d355e8-w1200-h800-te.jpg']),
    new Advertisment(3, 'Central', 'База отдыха на берегу Истринского водохранилища. Пятницкое шоссе 46км от МКАД',
      'Действующая база отдыха на берегу Истринского водохранилища. Своя пристань и песчаный пляж. Участок 3 Га (в аренде до 2053 года). На базе: 14 зимних домов, 15 летних домиков, ресторан, летний бар-веранда, баня с комнатами отдыха и бильярдом. Электричество, скважина.',
      290000000, 'Rub', ['+7 495 782-41-65'],
      ['http://landestate.ru/img/p5fb0532831ebbfa9a0603e0e27feb10e-w1200-h800-te.jpg',
        'http://landestate.ru/img/pecbf88bc49ef3cad0b45b9bb1f7ad962-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe14b684693b106703a73c2458700b672-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe508436487dae0784d7b1fb579d355e8-w1200-h800-te.jpg']),
    new Advertisment(4, 'Central', 'Парк-отель, Калужское шоссе, 38 км от МКАД, НОВАЯ МОСКВА',
      'Продается парк-отель на участке 10,5Га (плюс 20 Га земли под дачное строительство или 8 Га земель поселений вдоль реки)',
      290000000, 'USD', ['+7 495 782-42-66'],
      ['http://landestate.ru/img/p5fb0532831ebbfa9a0603e0e27feb10e-w1200-h800-te.jpg',
        'http://landestate.ru/img/pecbf88bc49ef3cad0b45b9bb1f7ad962-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe14b684693b106703a73c2458700b672-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe508436487dae0784d7b1fb579d355e8-w1200-h800-te.jpg',
        'http://landestate.ru/img/pecbf88bc49ef3cad0b45b9bb1f7ad962-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe14b684693b106703a73c2458700b672-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe508436487dae0784d7b1fb579d355e8-w1200-h800-te.jpg']),
    new Advertisment(5, 'Regions', 'База отдыха в Калуге. Калужское шоссе 460км от МКАД',
      'Действующая база отдыха на берегу Истринского водохранилища. Своя пристань и песчаный пляж. Участок 3 Га (в аренде до 2053 года). На базе: 14 зимних домов, 15 летних домиков, ресторан, летний бар-веранда, баня с комнатами отдыха и бильярдом. Электричество, скважина.',
      290000000, 'EUR', ['+9 495 782-41-62'],
      ['http://landestate.ru/img/p5fb0532831ebbfa9a0603e0e27feb10e-w1200-h800-te.jpg',
        'http://landestate.ru/img/pecbf88bc49ef3cad0b45b9bb1f7ad962-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe14b684693b106703a73c2458700b672-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe508436487dae0784d7b1fb579d355e8-w1200-h800-te.jpg'])
  ];

  constructor(private httpClient: HttpClient,
              private authService: AuthService) { }

  ngOnInit() {
      this.getAllAdvertisments();
  }

  getAllAdvertisments() {
    this.httpClient
      .get<Advertisment[]>('https://landestate-rus.firebaseio.com/ad.json', {
        observe: 'body',
        responseType: 'json'
      })
      .subscribe(
        (data: Advertisment[]) => {
          //  console.log(data);
          // this.advertisements = data;
          // this.advertisementChanged.next(this.advertisements.slice());
        }
      );



    return this.advertisements.slice();
  }

  getAdvertisementsByType(region: string) {
    console.log(region);
    const tAds: Advertisment[] = [];
    let index;
    for (index = 0; index < this.advertisements.length; ++index) {
      if (this.advertisements[index].region === region) {
        tAds.push(this.advertisements[index]);
      }
    }
    return tAds;
  }

  getAdvertisementById(id: number) {
    let index;
    for (index = 0; index < this.advertisements.length; ++index) {
      if (+(this.advertisements[index].id) === +id) {  // Почему понадобился + перед id ???
        return this.advertisements[index];
      }
    }
    return null;
  }

  getAvailableRegions() {
    return ['Central', 'Regions', 'Krimea'];
  }

  getAvailableCurrency() {
    return ['Rub', 'USD', 'EUR'];
  }

  delAdvertisementById(id: number) {

    let index;
    for (index = 0; index < this.advertisements.length; ++index) {
      if (+(this.advertisements[index].id) === +id) {  // Почему понадобился + перед id ???
        this.advertisements.splice(index, 1);
      }
    }
    this.advertisementChanged.next(this.advertisements.slice());
  }

  saveAdvertisement(id: number, add: Advertisment) {
    // const token = this.authService.getToken();
    
    this.httpClient
       .put<{ttt: Advertisment}>('https://landestate-rus.firebaseio.com/ad/'+ id+ '.json', add)
      //.put<{ttt: Advertisment}>('https://landestate-rus.firebaseio.com/ad.json', add)
      .subscribe (
        responseData => {
          // console.log(responseData);
        }
      );
  }
}
