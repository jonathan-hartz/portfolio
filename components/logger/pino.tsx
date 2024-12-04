import pino from "pino";
import { createPinoBrowserSend, createWriteStream } from "pino-logflare";

const apiKey = process.env.LOGFLARE_API_KEY || "";
const sourceToken = process.env.LOGFLARE_SOURCE_TOKEN || "";
// create pino-logflare stream
const stream = createWriteStream({
  apiKey,
  sourceToken,
});

// create pino-logflare browser stream
const send = createPinoBrowserSend({
  apiKey,
  sourceToken,
});

// create pino loggger
export const logger = pino(
  {
    browser: {
      transmit: {
        send: send,
      },
    },
  },
  stream,
);
