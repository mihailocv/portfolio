import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

// interfaces
import type { MenuItem } from '@shared/interfaces/menu-bar-item';

/**
 * Desktop-style menu bar component.
 *
 * Renders the top-level menu items provided by the parent.
 */
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AngularSvgIconModule],
})
export class MenuBar {
  /**
   * Top-level menu items displayed in the bar.
   */
  public menuItems = input.required<MenuItem[]>();
}
