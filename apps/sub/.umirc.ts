import { defineConfig } from "umi";

export default defineConfig({
  plugins: ['@umijs/plugins/dist/qiankun'],
  qiankun: {
    slave: {},
  },
  routes: [{ path: "/", component: "index" }],
});
