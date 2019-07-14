import { Vue, Component, Prop } from 'vue-property-decorator';
import { Item } from '../../types';

@Component
class SliderMobile extends Vue {
  @Prop() readonly items!: Item[];
  @Prop({ default: true }) readonly showArrows!: boolean;

  slide(direction: string): void {
    const { slider } = this.$refs;
    if (!slider || !(slider instanceof Element)) {
      return;
    }
    
    switch (direction) {
      case 'right':
        (slider as Element).scroll({
          left: slider.scrollLeft + slider.clientWidth,
          behavior: 'smooth',
        });
        break;
      case 'left':
        (slider as Element).scroll({
          left: slider.scrollLeft - slider.clientWidth,
          behavior: 'smooth',
        });
        break;
      default:
        break;
    }
  }
}

export default SliderMobile;
