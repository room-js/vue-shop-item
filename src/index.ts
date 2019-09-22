import { Vue, Component, Prop } from 'vue-property-decorator';
import SliderMobile from './components/SliderMobile/index.vue';
import SliderDesktop from './components/SliderDesktop/index.vue';
import { Item, Items } from './types';

@Component({
  components: {
    SliderMobile,
    SliderDesktop
  },
})
class VueShopItem extends Vue {
  @Prop() readonly items!: Item[] | Items;
  @Prop({ default: true }) readonly showArrows!: boolean;
  @Prop({ default: true }) readonly showPreview!: boolean;
  @Prop({ default: 'left' }) readonly previewPosition!: string;

  isMobile(): boolean | undefined {
    if (!window) {
      return;
    }
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(window.navigator.userAgent);
  }

  get itemsMobile(): Item[] {
    return Array.isArray(this.items) ? this.items : this.items.mobile;
  }

  get itemsDesktop(): Item[] {
    return Array.isArray(this.items) ? this.items : this.items.desktop;
  }
}

export default VueShopItem;
