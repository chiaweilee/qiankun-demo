import { defineConfig } from "umi";

export default defineConfig({
  plugins: ["@umijs/plugins/dist/mf"],
  routes: [
    { path: "/", component: "index" },
    { path: "/umi-demo", component: "demo" },
  ],
  mf: {
    remotes: [
      {
        name: "remoteComponent",
        entry: "http://127.0.0.1:3002/remote.js",
      },
    ],
  },
});
