import { configure } from '@storybook/vue';
import { addDecorator, addParameters } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';

const req = require.context('../src', true, /\.stories\.ts$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs);

addParameters({
  options: {
    theme: {
      brandTitle: '[JavaScript Room] VueShopItem',
      brandUrl: 'https://roomjs.com',
    },
  },
})

configure(loadStories, module);