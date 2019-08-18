import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@wessberg/rollup-plugin-ts';
import vue from 'rollup-plugin-vue';
import sass from 'rollup-plugin-sass';

export default [
  {
    input: 'src/index.vue',
    output: {
      name: 'VueShopItem',
      dir: 'lib',
      format: 'umd',
      globals: {
        'vue': 'Vue',
        'vue-property-decorator': 'vuePropertyDecorator',
      },
    },
    external: [
      'vue-property-decorator',
      'vue',
    ],
    plugins: [
      resolve(),
      commonjs(),
      vue(),
      typescript({
        tsconfig: resolvedConfig => ({
          ...resolvedConfig,
          declaration: true,
          allowJs: false,
        }),
      }),
      sass({
        output: true,
        failOnError: true,
      }),
    ],
  }
];
