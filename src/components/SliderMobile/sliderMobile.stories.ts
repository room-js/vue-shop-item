import { storiesOf } from '@storybook/vue';
import { boolean } from '@storybook/addon-knobs';
import SliderMobile from './index.vue';
import items from '../../mocks/items';

storiesOf('SliderMobile', module)
  .addParameters({
    viewport: {
      defaultViewport: 'iphone6',
    }
  })
  .add('Default', () => {
    const template = `
      <div style="width: calc(100vw - 20px);">
        <slider-mobile :items="items" :showArrows="showArrows" />
      </div>
    `;
    return {
      components: { SliderMobile },
      props: {
        items: {
          type: Array,
          default: items
        },
        showArrows: {
          type: Boolean,
          default: boolean('Show arrows', true),
        }
      },
      template,
    };
  });