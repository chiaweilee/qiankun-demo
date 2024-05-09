import { defineConfig } from "umi";

const moduleFederationName = "remoteComponent";

export default defineConfig({
  plugins: ["@umijs/plugins/dist/mf"],
  mf: {
    name: moduleFederationName,
    library: { type: "window", name: moduleFederationName },
  },
  mfsu: false,
  hash: false,
});
