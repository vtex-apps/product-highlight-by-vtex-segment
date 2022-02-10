import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles'
import atob from 'atob'

import useAppSettings from './hooks/useAppSettings'
import type { Collection, Runtime } from './typings/global'

declare let window: {
  __RUNTIME__: Runtime
}

const ProductHighligh: StorefrontFunctionComponent = () => {
  const { product } = useProduct()

  if (!product) {
    return null
  }

  const { appSettings: appInfo } = useAppSettings()

  const collections: Collection[] = product.productClusters

  const segmentToken = window?.__RUNTIME__?.segmentToken
  const segmentTokenInfo = JSON.parse(atob(segmentToken))
  const { regionId } = segmentTokenInfo
  let sellerIds: string[]

  if (regionId) {
    const regionIdInfo = atob(regionId)

    sellerIds = regionIdInfo.split('SW#')[1].split(';')
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

  const imageUrlOfHighlight = appInfo?.imageUrlOfHighlight
    ? [appInfo?.imageUrlOfHighlight]
    : ''

  const CSS_HANDLES = [
    'productHighlightByVtexSegmentContainer',
    'imageOfHighlight',
  ]

  const handles = useCssHandles(CSS_HANDLES)

  if (productFromCollection.some((p) => p === true)) {
    const keyDiv = `${product.productId}-productHighlightByVtexSegment`

    return (
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
    )
  }

  return null
}

export default ProductHighligh
