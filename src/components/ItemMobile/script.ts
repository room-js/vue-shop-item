import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
class ItemMobile extends Vue {
  mounted() {
    console.log('Mobile');
    
  }
}

export default ItemMobile;
