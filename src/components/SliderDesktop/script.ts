import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { debounce } from 'ts-debounce';
import { Item } from '../../types';

@Component
class SliderDesktop extends Vue {
  @Prop() readonly items!: Item[];
  @Prop({ default: true }) readonly showPreview!: boolean;
  @Prop({ default: 'left' }) readonly previewPosition!: string;

  activeIndex: number = 0;

  onSlide(event: Event) {}

  onSlideHandler(event: Event): void {
    this.activeIndex = this.getActiveIndex();
  }

  getActiveIndex(): number {
    const { slider } = this.$refs;
    
    if (
      !slider ||
      !(slider instanceof Element) ||
      !slider.scrollTop
    ) {
      return 0;
    }

    return Math.round(slider.scrollTop / slider.clientHeight);
  }

  slideTo(index: number): void {
    const { slider } = this.$refs;
    
    if (!slider || !(slider instanceof Element)) {
      return;
    }

    slider.scrollTo({
      top: index * slider.clientHeight,
      left: 0,
      behavior: 'smooth',
    })
  }

  created() {
    this.onSlide = debounce(this.onSlideHandler, 200);
  }

  mounted() {
    const { slider } = this.$refs;
    if (!slider || !(slider instanceof Element)) {
      return;
    }
    slider.addEventListener('scroll', this.onSlide);
  }

  beforeDestroy() {
    const { slider } = this.$refs;
    if (!slider || !(slider instanceof Element)) {
      return;
    }
    slider.removeEventListener('scroll', this.onSlide);
  }
}

export default SliderDesktop;
