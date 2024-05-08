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

const moduleFederationName = "remoteComponent";

export default defineConfig({
  plugins: ["@umijs/plugins/dist/mf"],
  mf: {
    name: moduleFederationName,
    library: { type: "window", name: moduleFederationName },
    shared,
  },
  mfsu: {
    strategy: "eager",
  },
  hash: false,
});
