import { createClient } from "contentful";

export const client = createClient({
  space: "ag32kgzrinn3", // ID of a Compose-compatible space to be used \
  accessToken: "O8K8Iq7-mBwH5RHusB1QBQJV8h-OHe3L_RuNvgnsXXs", // delivery API key for the space \
});
