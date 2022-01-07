import { useState, useEffect } from 'react'
import { useLazyQuery } from 'react-apollo'

import GetAppSettings from '../graphql/getAppSettings.gql'

const useAppSettings = (app: string, version: string) => {
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
        console.log('data', data)
        const aux = JSON.parse(data.appSettings.message)

        setAppSettings(aux)
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
