import { storiesOf } from '@storybook/vue';
import { boolean, optionsKnob } from '@storybook/addon-knobs';
import VueShopItem from './index.vue';
import { Item } from './types';
import items from './mocks/items';

const itemsObj = items.reduce((acc, item, i) => ({ ...acc, [i]: i }), {});

storiesOf('VueShopItem', module)
  .add('Default', () => {
    const itemsOptions = optionsKnob(
      'Items',
      itemsObj,
      items.map((item, i) => i),
      { display: 'multi-select' }
    );

    const getOptions = (): Item[] => itemsOptions.map((i) => ({ imageUrl: items[i].imageUrl }));

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
          default: getOptions
        },
        showArrows: {
          type: Boolean,
          default: boolean('Show arrows', true),
        }
      },
      template,
    };
  });