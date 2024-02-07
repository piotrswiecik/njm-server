import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config = {
  overwrite: true,
  schema: "./src/schema/**/*.graphql",
  generates: {
    "src/graphql/": defineConfig({
      typesPluginsConfig: {
        // setting from @graphql-codegen/typescript-resolvers 
        optionalInfoArgument: true,
      },
      // setting from @eddeee888/gcg-typescript-resolver-files
      // overrides type or resolver impl
      // https://github.com/eddeee888/graphql-code-generator-plugins/blob/master/packages/typescript-resolver-files/README.md#scalarsoverrides
      scalarsOverrides: {
        ID: {
          type: "string",
        },
      },
    }),
  },
  hooks: {
    afterAllFileWrite: ["pnpm prettier --write"],
  },
} satisfies CodegenConfig;

export default config;
