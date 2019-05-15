import {Component, Input, OnInit} from '@angular/core';
import {Advertisment} from '../../advertisment.module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  slideShow = false;

  @Input() advertisement: Advertisment;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onDetail() {
    console.log(this.advertisement.id);
    this.router.navigate(['/detail', this.advertisement.id]);
  }

  onImage(img: string) {
    console.log(img);
    this.slideShow = true;
  }
}
