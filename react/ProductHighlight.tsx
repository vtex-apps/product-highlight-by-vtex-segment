import React, { useEffect, useState } from 'react'
import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles'
import atob from 'atob'
import { useLazyQuery } from 'react-apollo'

import appSettings from './graphql/appSettings.gql'
import type { Collection, Runtime, AppInfo } from './typings/global'

declare let window: {
  __RUNTIME__: Runtime
}

const ProductHighligh: StorefrontFunctionComponent = () => {
  const { product } = useProduct()

  if (!product) {
    return null
  }

  const [appSettingsQuery, { data: dataConfig }] = useLazyQuery(appSettings, {
    ssr: false,
  })

  const [appInfo, setAppInfo] = useState<AppInfo>()
  const [imageUrlOfHighlight, setImageUrlOfHighlight] = useState<string>('')
  /* useEffect(() => {
    if (!dataConfig) {
      return
    }

    const settings = JSON.parse(dataConfig?.appSettings?.message)

    console.log('settings', settings)
    setAppInfo(settings)
  }, []) */

  const collections: Collection[] = product.productClusters

  console.log('collections', collections)

  const segmentToken = window?.__RUNTIME__?.segmentToken
  const segmentTokenInfo = JSON.parse(atob(segmentToken))
  const { regionId } = segmentTokenInfo
  let sellerIds: string[]

  if (regionId) {
    const regionIdInfo = atob(regionId)

    sellerIds = regionIdInfo.split('SW#')[1].split(';')
    console.log('sellerIds', sellerIds)
  } else {
    sellerIds = appInfo?.defaultSellerId ? [appInfo?.defaultSellerId] : []
  }

  const defaultNameCollection = appInfo?.defaultNameCollection
    ? appInfo?.defaultNameCollection
    : ''

  const productFromCollection: boolean[] = []

  sellerIds?.forEach((seller: string) => {
    productFromCollection.push(
      collections.some(
        (collection: Collection) =>
          collection.name.trim() === `${seller}-${defaultNameCollection}`
      )
    )
  })
  console.log('appInfo', appInfo)

  console.log('imageUrlOfHighlight', imageUrlOfHighlight)

  const CSS_HANDLES = [
    'productHighlightByVtexSegmentContainer',
    'imageOfHighlight',
  ]

  const handles = useCssHandles(CSS_HANDLES)

  useEffect(() => {
    if (!dataConfig) {
      return
    }

    const settings = JSON.parse(dataConfig?.appSettings?.message)

    console.log('settings', settings)

    setAppInfo(settings)
  }, [dataConfig])

  useEffect(() => {
    if (!appInfo) {
      return
    }

    console.log('appInfo', appInfo)

    setImageUrlOfHighlight(
      appInfo?.imageUrlOfHighlight ? appInfo?.imageUrlOfHighlight : ''
    )
  }, [appInfo])

  if (productFromCollection.some((p) => p === true)) {
    console.log('product.productId', product.productId)

    appSettingsQuery()
  }

  const keyDiv = `${product.productId}-productHighlightByVtexSegment`

  return (
    <>
      {imageUrlOfHighlight && (
        <div
          key={keyDiv}
          id={keyDiv}
          className={`${handles.productHighlightByVtexSegmentContainer} t-body mh1 mv2`}
        >
          <img
            className={`${handles.imageOfHighlight}`}
            src={`${imageUrlOfHighlight}`}
            alt="imageUrlOfHighlight"
          />
        </div>
      )}
    </>
  )
}

export default ProductHighligh
