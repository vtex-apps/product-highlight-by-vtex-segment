import { queries as appSettingsQueries } from './appSettings'

export const resolvers = {
  Query: {
    ...appSettingsQueries,
  },
}
