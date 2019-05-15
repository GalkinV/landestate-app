import {Advertisment} from './advertisment.module';

export class AdvertisementService {
  private advertisements: Advertisment[] = [
    new Advertisment(1, 'central', 'Парк-отель, Калужское шоссе, 38 км от МКАД, НОВАЯ МОСКВА',
      'Продается парк-отель на участке 10,5Га (плюс 20 Га земли под дачное строительство или 8 Га земель поселений вдоль реки)',
      290000000, 'руб', ['+7 495 782-41-64'],
      ['http://landestate.ru/img/p5fb0532831ebbfa9a0603e0e27feb10e-w1200-h800-te.jpg',
      'http://landestate.ru/img/pecbf88bc49ef3cad0b45b9bb1f7ad962-w1200-h800-te.jpg',
      'http://landestate.ru/img/pe14b684693b106703a73c2458700b672-w1200-h800-te.jpg',
      'http://landestate.ru/img/pe508436487dae0784d7b1fb579d355e8-w1200-h800-te.jpg',
        'http://landestate.ru/img/pecbf88bc49ef3cad0b45b9bb1f7ad962-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe14b684693b106703a73c2458700b672-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe508436487dae0784d7b1fb579d355e8-w1200-h800-te.jpg']),
    new Advertisment(2, 'central', 'База отдыха на берегу Истринского водохранилища. Пятницкое шоссе 46км от МКАД',
      'Действующая база отдыха на берегу Истринского водохранилища. Своя пристань и песчаный пляж. Участок 3 Га (в аренде до 2053 года). На базе: 14 зимних домов, 15 летних домиков, ресторан, летний бар-веранда, баня с комнатами отдыха и бильярдом. Электричество, скважина.',
      290000000, 'руб', ['+7 495 782-41-63'],
      ['http://landestate.ru/img/p5fb0532831ebbfa9a0603e0e27feb10e-w1200-h800-te.jpg',
        'http://landestate.ru/img/pecbf88bc49ef3cad0b45b9bb1f7ad962-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe14b684693b106703a73c2458700b672-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe508436487dae0784d7b1fb579d355e8-w1200-h800-te.jpg']),
    new Advertisment(3, 'central', 'Парк-отель, Калужское шоссе, 38 км от МКАД, НОВАЯ МОСКВА',
      'Продается парк-отель на участке 10,5Га (плюс 20 Га земли под дачное строительство или 8 Га земель поселений вдоль реки)',
      290000000, 'руб', ['+7 495 782-41-62'],
      ['http://landestate.ru/img/p5fb0532831ebbfa9a0603e0e27feb10e-w1200-h800-te.jpg',
        'http://landestate.ru/img/pecbf88bc49ef3cad0b45b9bb1f7ad962-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe14b684693b106703a73c2458700b672-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe508436487dae0784d7b1fb579d355e8-w1200-h800-te.jpg',
        'http://landestate.ru/img/pecbf88bc49ef3cad0b45b9bb1f7ad962-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe14b684693b106703a73c2458700b672-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe508436487dae0784d7b1fb579d355e8-w1200-h800-te.jpg']),
    new Advertisment(4, 'central', 'База отдыха на берегу Истринского водохранилища. Пятницкое шоссе 46км от МКАД',
      'Действующая база отдыха на берегу Истринского водохранилища. Своя пристань и песчаный пляж. Участок 3 Га (в аренде до 2053 года). На базе: 14 зимних домов, 15 летних домиков, ресторан, летний бар-веранда, баня с комнатами отдыха и бильярдом. Электричество, скважина.',
      290000000, 'руб', ['+7 495 782-41-62'],
      ['http://landestate.ru/img/p5fb0532831ebbfa9a0603e0e27feb10e-w1200-h800-te.jpg',
        'http://landestate.ru/img/pecbf88bc49ef3cad0b45b9bb1f7ad962-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe14b684693b106703a73c2458700b672-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe508436487dae0784d7b1fb579d355e8-w1200-h800-te.jpg']),
    new Advertisment(5, 'central', 'Парк-отель, Калужское шоссе, 38 км от МКАД, НОВАЯ МОСКВА',
      'Продается парк-отель на участке 10,5Га (плюс 20 Га земли под дачное строительство или 8 Га земель поселений вдоль реки)',
      290000000, 'руб', ['+7 495 782-41-62'],
      ['http://landestate.ru/img/p5fb0532831ebbfa9a0603e0e27feb10e-w1200-h800-te.jpg',
        'http://landestate.ru/img/pecbf88bc49ef3cad0b45b9bb1f7ad962-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe14b684693b106703a73c2458700b672-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe508436487dae0784d7b1fb579d355e8-w1200-h800-te.jpg',
        'http://landestate.ru/img/pecbf88bc49ef3cad0b45b9bb1f7ad962-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe14b684693b106703a73c2458700b672-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe508436487dae0784d7b1fb579d355e8-w1200-h800-te.jpg']),
    new Advertisment(6, 'region', 'База отдыха на берегу Истринского водохранилища. Пятницкое шоссе 46км от МКАД',
      'Действующая база отдыха на берегу Истринского водохранилища. Своя пристань и песчаный пляж. Участок 3 Га (в аренде до 2053 года). На базе: 14 зимних домов, 15 летних домиков, ресторан, летний бар-веранда, баня с комнатами отдыха и бильярдом. Электричество, скважина.',
      290000000, 'руб', ['+7 495 782-41-62'],
      ['http://landestate.ru/img/p5fb0532831ebbfa9a0603e0e27feb10e-w1200-h800-te.jpg',
        'http://landestate.ru/img/pecbf88bc49ef3cad0b45b9bb1f7ad962-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe14b684693b106703a73c2458700b672-w1200-h800-te.jpg',
        'http://landestate.ru/img/pe508436487dae0784d7b1fb579d355e8-w1200-h800-te.jpg'])
  ];
  constructor() { }

  getAllAdvertisments() {
    return this.advertisements.slice();
  }

  getAdvertisementsByType(type: string) {
    const tAds: Advertisment[] = [];
    let index;
    for (index = 0; index < this.advertisements.length; ++index) {
      if (this.advertisements[index].type === type) {
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
}
