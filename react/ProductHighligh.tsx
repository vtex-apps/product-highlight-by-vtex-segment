import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useCssHandles } from 'vtex.css-handles'

const ProductHighligh: StorefrontFunctionComponent = () => {
  const productContextValue = useProduct()

  if (!productContextValue?.product?.items) {
    return null
  }

  const CSS_HANDLES = ['quantityOnCart']
  const handles = useCssHandles(CSS_HANDLES)


  return (
    <div
      className={`${handles.quantityOnCart} t-body mh1 mv2`}
    >
      Test
    </div>
  )
}

export default ProductHighligh
