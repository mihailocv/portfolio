import { provideHttpClient } from '@angular/common/http';
import { applicationConfig, type Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import docJson from '../documentation.json';

setCompodocJson(docJson);

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [provideHttpClient(), provideAngularSvgIcon()],
    }),
  ],
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      sort: 'requiredFirst',
    },
    docs: {
      toc: true,
    },
  },
};

export default preview;