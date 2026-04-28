import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-startup-2',
  imports: [],
  templateUrl: './startup-2.html',
  styleUrl: './startup-2.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Startup2 {
  readonly showProgress = input(false);
}
