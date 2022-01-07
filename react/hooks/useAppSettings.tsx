import { useState, useEffect } from 'react'
import { useLazyQuery } from 'react-apollo'

import GetAppSettings from '../graphql/appSettings.gql'

const useAppSettings = () => {
  console.log('useAppSettings')
  const [appSettings, setAppSettings] = useState<any>({})

  try {
    const [getContent, { data, loading, error }] = useLazyQuery(
      GetAppSettings,
      {
        // notifyOnNetworkStatusChange: true,
        ssr: false,
      }
    )

    useEffect(() => {
      getContent()
    }, [])

    useEffect(() => {
      if (!loading && !error && data) {
        console.log('data', data)
        setAppSettings(data.appSettings)
      }

      if (error) {
        console.error('error useEffect', error)
      }

      if (loading) {
        console.log('loading', loading)
      }
    }, [data, loading, error])

    return { appSettings, loading, error }
  } catch (error) {
    console.error('error', error)
    const load = 'load'

    return { appSettings, loading: load, error }
  }
}

export default useAppSettings
