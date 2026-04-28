import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';

// Components
import { Startup1 } from '@layout/startup-1/startup-1';
import { Startup2 } from '@layout/startup-2/startup-2';
import { Desktop } from '@layout/desktop/desktop';

// interfaces
import type { BootScreen } from '@shared/interfaces/boot-screen';

@Component({
  selector: 'app-root',
  imports: [Startup1, Startup2, Desktop],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly destroyRef = inject(DestroyRef);

  readonly screen = signal<BootScreen>('startup1');

  constructor() {
    afterNextRender(() => {
      const startup2Timer = window.setTimeout(() => {
        this.screen.set('startup2');
      }, 1500);

      this.destroyRef.onDestroy(() => {
        window.clearTimeout(startup2Timer);
      });
    });
  }
}
