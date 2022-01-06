import { useState, useEffect } from 'react'
import { useLazyQuery } from 'react-apollo'

import GetAppSettings from '../graphql/getAppSettings.gql'

const useAppSettings = (app: string, version: string) => {
  const [appSettings, setAppSettings] = useState<any>()
  const [getContent, { data, loading, error }] = useLazyQuery(GetAppSettings, {
    notifyOnNetworkStatusChange: true,
    ssr: false,
  })

  useEffect(() => {
    if (app && version) {
      getContent({
        variables: {
          app: `${app}`,
          version: `${version}`,
        },
      })
    }
  }, [])

  useEffect(() => {
    if (!loading && !error && data) {
      const aux = JSON.parse(data.appSettings.message)

      setAppSettings(aux)
    }
  }, [data, loading, error])

  return { appSettings, loading, error }
}

export default useAppSettings
