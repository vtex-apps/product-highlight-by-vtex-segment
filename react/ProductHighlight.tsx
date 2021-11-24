import React, {useEffect, useState} from 'react'
import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles'
import atob from 'atob'
import appSettings from './graphql/appSettings.gql'
import {useQuery } from 'react-apollo'

const ProductHighligh: StorefrontFunctionComponent = () => {
  const {product} = useProduct()

  if (!product) {
    return null
  }

  const { data: dataConfig } = useQuery(appSettings)
  const [appInfo, setAppInfo] = useState<AppInfo>()

  useEffect(() => {
    if (!dataConfig) {
      return
    }

    const settings = JSON.parse(dataConfig?.appSettings?.message)
    setAppInfo(settings)
  }, [dataConfig])

  const collections: Collection[] = product.productClusters

  const segmentToken = window?.__RUNTIME__?.segmentToken
  const segmentTokenInfo = JSON.parse(atob(segmentToken))
  const {regionId} = segmentTokenInfo
  let sellerIds: string[]
  if (regionId) {
    const regionIdInfo = atob(regionId)
    sellerIds = regionIdInfo.split('SW#')[1].split(';')
  }else{
    sellerIds = appInfo?.defaultSellerId ? [appInfo?.defaultSellerId] : []
  }

  const defaultNameCollection = appInfo?.defaultNameCollection ? appInfo?.defaultNameCollection : ''

  const productFromCollection: boolean[] = []
  sellerIds?.forEach((seller: string) => {
    productFromCollection.push(collections.some((collection: Collection) => collection.name === `${seller}-${defaultNameCollection}`))
  });

  const imageUrlOfHighlight = appInfo?.imageUrlOfHighlight ? [appInfo?.imageUrlOfHighlight] : ''

  const CSS_HANDLES = ['productHighlightByVtexSegment', 'imageUrlOfHighlight']
  const handles = useCssHandles(CSS_HANDLES)

  if (productFromCollection.some(p => p===true)) {
    const keyDiv = `${product.productId}-productHighlightByVtexSegment`
    return (
      <div
          key={keyDiv}
          id={keyDiv}
          className={`${handles.productHighlightByVtexSegment} t-body mh1 mv2`}
      >
        <img className={`${handles.imageUrlOfHighlight}`} src={`${imageUrlOfHighlight}`} alt="imageUrlOfHighlight"/>
      </div>
    )
  } else {
    return null
  }
}

export default ProductHighligh

interface Runtime {
  segmentToken: string
}

declare let window: {
  __RUNTIME__: Runtime
}

interface Collection {
  id: string
  name: string
}

interface AppInfo{
  defaultSellerId: string
  defaultNameCollection: string
  imageUrlOfHighlight: string
}