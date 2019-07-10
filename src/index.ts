import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
class VueShopItem extends Vue {
  @Prop() readonly text!: string;
  // @Prop({ default: 'default value' }) readonly propB!: string
  // @Prop([String, Boolean]) readonly propC: string | boolean | undefined

  mounted() {
    console.log('MOUNTED', this.text);
  }
}

export default VueShopItem;
