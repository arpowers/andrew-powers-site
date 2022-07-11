import path from "path"
import { FactorUi } from "@factor/ui"
import {
  FactorApp,
  safeDirname,
  FactorEnv,
  ServiceConfig,
  FactorRouter,
  CliOptions,
} from "@factor/api"
import { FactorDevRestart } from "@factor/api/plugin-env/restart"
import { CompiledServiceConfig } from "../.factor/config"
import { routes } from "./routes"
import App from "./App.vue"

const cwd = safeDirname(import.meta.url, "..")

export const appName = "Andrew Powers"
export const appEmail = "hello@andrewpowers.com"
export const productionUrl = "https://www.andrewpowers.com"

export const factorEnv = new FactorEnv<CompiledServiceConfig>({
  envFiles: [path.join(cwd, "./.env")],
  cwd,
  appName,
  appEmail,
  productionUrl,
})

export const factorRouter = new FactorRouter<CompiledServiceConfig>({
  routes,
})

export const factorApp = new FactorApp({
  productionUrl,
  port: +(factorEnv.var("APP_PORT") || 3000),
  rootComponent: App,
  factorRouter,
  uiPaths: [
    path.join(cwd, "./src/**/*.{vue,js,ts,html}"),
    path.join(cwd, "./src/*.{vue,js,ts,html}"),
  ],
  factorEnv,
})

factorEnv.addHook({
  hook: "runCommand",
  callback: async (command: string, opts: CliOptions) => {
    const { serve, prerender } = opts

    if (command.startsWith("r-")) {
      const realCommand = command.split("-").pop()
      if (!realCommand) throw new Error("No command for restart")
      await new FactorDevRestart().restartInitializer({
        command: realCommand,
        config: {
          watch: [safeDirname(import.meta.url, "..")],
        },
      })
    } else {
      if (command == "dev") {
        await factorApp.serveApp()
      } else if (command == "build") {
        await factorApp.buildApp({ serve, prerender })
      } else if (command == "prerender") {
        await factorApp.buildApp({ serve, prerender })
      }
    }
  },
})

export const service = {
  factorEnv,
  factorApp,
  factorRouter,
  factorUi: new FactorUi({ factorApp }),
}

export type ServiceContainer = typeof service

export const setup = (): ServiceConfig => {
  return { service }
}
