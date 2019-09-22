import { storiesOf } from '@storybook/vue';
import { boolean, select } from '@storybook/addon-knobs';
import SliderDesktop from './index.vue';
import { items } from '../../mocks/items';

storiesOf('SliderDesktop', module)
  .add('Default', () => {
    const template = `
      <div style="height: 80vh; width: 40vw; border: 1px solid #ccc;">
        <slider-desktop :items="items" :showPreview="showPreview" :previewPosition="previewPosition" />
      </div>
    `;
    return {
      components: { SliderDesktop },
      props: {
        items: {
          type: Array,
          default: items
        },
        showPreview: {
          type: Boolean,
          default: boolean('Show preview', true),
        },
        previewPosition: {
          type: String,
          default: select('Preview position', {
            Left: 'left',
            Right: 'right',
          }, 'left'),
        }
      },
      template,
    };
  });