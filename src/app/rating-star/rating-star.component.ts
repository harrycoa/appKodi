import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})
export class RatingStarComponent implements OnChanges {
  @Input() rating: number;
  // estatico rating: number = 4; se cambia por un valor dinamico input
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.rating * 76 / 5;
  }

  OnClick(){
    this.ratingClicked.emit(`Has dado click sobre la calificacion ${this.rating}`);
  }

}
