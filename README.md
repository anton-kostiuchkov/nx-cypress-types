# nx-cypress-types
Demo repo for types not being checked in cypress files

1. npx create-nx-workspace@latest
   ✔ Choose what to create                 · integrated
   ✔ What to create in the new workspace   · react-monorepo
   ✔ Repository name                       · myorg
   ✔ Application name                      · store
   ✔ Bundler to be used to build the application · webpack
   ✔ Default stylesheet format             · css
   ✔ Enable distributed caching to make your CI faster · No
2. npx nx g @nrwl/react:lib common-ui
3. npx nx g @nrwl/react:cypress-component-configuration --project=common-ui --build-target=store:build:development
4. npx nx component-test common-ui
