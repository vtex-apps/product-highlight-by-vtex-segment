import { useState, useEffect } from 'react'
import { useLazyQuery } from 'react-apollo'

import GetAppSettings from '../graphql/appSettings.gql'
import type { AppInfo } from '../typings/global'

const useAppSettings = () => {
  const [appSettings, setAppSettings] = useState<AppInfo>()

  const [getContent, { data, loading, error }] = useLazyQuery(GetAppSettings, {
    notifyOnNetworkStatusChange: true,
    ssr: false,
  })

  useEffect(() => {
    getContent()
  }, [])

  useEffect(() => {
    if (!loading && !error && data) {
      setAppSettings(data.appSettings)
    }
  }, [data, loading, error])

  return { appSettings, loading, error }
}

export default useAppSettings
