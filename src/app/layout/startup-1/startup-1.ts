import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-startup-1',
  imports: [AngularSvgIconModule],
  templateUrl: './startup-1.html',
  styleUrl: './startup-1.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Startup1 {}
