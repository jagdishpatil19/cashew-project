import { Component } from '@angular/core';

@Component({
  selector: 'app-complete-order',
  templateUrl: './complete-order.component.html',
  styleUrls: ['./complete-order.component.scss']
})
export class CompleteOrderComponent {

  isAnimating = false;

  onButtonClick(): void {
    if (!this.isAnimating) {
      this.isAnimating = true;

      setTimeout(() => {
        this.isAnimating = false;
      }, 10000); // 10 seconds
    }
  }
}
