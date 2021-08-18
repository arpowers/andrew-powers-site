import { createClient, DarwinClient } from "@darwin_/client"

let __darwinClient: DarwinClient
export const darwin = (): DarwinClient => {
  if (!__darwinClient) {
    __darwinClient = createClient("si611d5a7b8aa5f15537cb5ce2")
  }

  return __darwinClient
}
