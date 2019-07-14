import { Vue, Component, Prop } from 'vue-property-decorator';
import SliderMobile from './components/SliderMobile/index.vue';
import SliderDesktop from './components/SliderDesktop/index.vue';
import { Item } from './types';

@Component({
  components: {
    SliderMobile,
    SliderDesktop
  },
})
class VueShopItem extends Vue {
  @Prop() readonly items!: Item[];
  @Prop({ default: true }) readonly showArrows!: boolean;
  @Prop({ default: true }) readonly showPreview!: boolean;
  @Prop({ default: 'left' }) readonly previewPosition!: string;

  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
      .test(navigator.userAgent);
  }
}

export default VueShopItem;
