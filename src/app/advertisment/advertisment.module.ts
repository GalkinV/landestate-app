export class Advertisment {
  public id: number;
  public  region: string;
  public caption: string;
  public description: string;
  public price: number;
  public currency: string;
  public phone: string[];
  public imagePath: string[];

  constructor(id: number, type: string, caption: string, desc: string, price: number,
              currency: string, phone: string[], imagePath: string[]) {
    this.id = id;
    this.region = type;
    this.caption = caption;
    this.description = desc;
    this.price = price;
    this.currency = currency;
    this.phone = phone;
    this.imagePath = imagePath;
  }
}
