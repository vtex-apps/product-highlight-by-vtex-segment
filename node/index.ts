import type { RecorderState } from '@vtex/api'
import { LRUCache, Service } from '@vtex/api'

import { Clients } from './clients'
import { resolvers } from './resolvers'

const TIMEOUT_MS = 800

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const memoryCache = new LRUCache<string, any>({ max: 20 })

metrics.trackCache('status', memoryCache)

export default new Service<Clients, RecorderState, Context>({
  clients: {
    implementation: Clients,
    options: {
      default: {
        retries: 2,
        timeout: TIMEOUT_MS,
      },
      status: {
        memoryCache,
      },
    },
  },
  graphql: {
    resolvers,
  },
})
