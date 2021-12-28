import { Component, Input } from '@angular/core';
@Component({
  selector: 'd-modal-test',
  templateUrl: './modal-test.component.html'
})
export class ModalTestComponent {
  @Input() data: any;

  constructor() {
  }

  onMouseover() {
    this.data.statusChange();
  }
}
