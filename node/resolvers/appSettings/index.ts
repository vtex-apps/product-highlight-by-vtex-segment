export const queries = {
  appSettings: async (_: unknown, __: unknown, ctx: Context) => {
    const appId = process.env.VTEX_APP_ID ? process.env.VTEX_APP_ID : ''
    const { defaultSellerId, defaultNameCollection, imageUrlOfHighlight } =
      await ctx.clients.apps.getAppSettings(appId)

    return { defaultSellerId, defaultNameCollection, imageUrlOfHighlight }
  },
}
