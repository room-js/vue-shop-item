import { storiesOf } from '@storybook/vue';
import { boolean } from '@storybook/addon-knobs';
import VueShopItem from './index.vue';
import items from './mocks/items';

storiesOf('VueShopItem', module)
  .add('Default', () => {
    const template = `
      <div style="width: calc(100vw - 20px); height: calc(100vh - 20px);">
        <vue-shop-item :items="items" :showArrows="showArrows" />
      </div>
    `;
    return {
      components: { VueShopItem },
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