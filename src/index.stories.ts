import { storiesOf } from '@storybook/vue';
import { boolean, optionsKnob } from '@storybook/addon-knobs';
import VueShopItem from './index.vue';
import { Item } from './types';
import items from './mocks/items';

const itemsObj = items.reduce((acc, item, i) => ({ ...acc, [i]: item }), {});

storiesOf('VueShopItem', module)
  .add('Default', () => {
    const itemsOptions = optionsKnob('Items', itemsObj, items, { display: 'multi-select' });

    // const getOptions = (): Item[] => {
    //   console.log(itemsOptions);
    //   return itemsOptions;
    //   // return itemsOptions.map((o) => ({ imageUrl: o.imageUrl }));
    // }

    // console.log(getOptions());

    console.log(itemsOptions);
    

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
          default: () => itemsOptions
        },
        showArrows: {
          type: Boolean,
          default: boolean('Show arrows', true),
        }
      },
      template,
    };
  });