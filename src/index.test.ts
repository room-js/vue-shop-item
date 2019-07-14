import { mount } from '@vue/test-utils';
import VueShopItem from './index.vue';
import items from './mocks/items';

test('renders desktop slider correctly', () => {
  const wrapper = mount(VueShopItem, {
    propsData: {
      items,
    }
  });
  expect(wrapper).toMatchSnapshot();
});

test('renders mobile slider correctly', () => {
  Object.defineProperty(window.navigator, 'userAgent', {value: 'Android'});
  const wrapper = mount(VueShopItem, {
    propsData: {
      items,
    }
  });
  expect(wrapper).toMatchSnapshot();
});
