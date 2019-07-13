import { Vue, Component, Prop } from 'vue-property-decorator';
import ItemMobile from './components/ItemMobile/index.vue';

@Component({
  components: {
    ItemMobile,
  },
})
class VueShopItem extends Vue {
  @Prop() readonly text!: string;
  // @Prop({ default: 'default value' }) readonly propB!: string
  // @Prop([String, Boolean]) readonly propC: string | boolean | undefined
}

export default VueShopItem;
