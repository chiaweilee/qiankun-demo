import { defineConfig } from "umi";

const shared = {
  react: {
    singleton: true,
    eager: true,
  },
  "react-dom": {
    singleton: true,
    eager: true,
  },
};

export default defineConfig({
  plugins: ["@umijs/plugins/dist/mf"],
  routes: [
    { path: "/", component: "index" },
    { path: "/umi-demo", component: "demo" },
  ],
  mf: {
    name: 'hostSub',
    remotes: [
      {
        name: "remoteComponent",
        entry: "http://127.0.0.1:3002/remote.js",
      },
    ],
    shared,
  },
});
