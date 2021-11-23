📢 Use this project, [contribute](https://github.com/vtex-apps/quantity-on-cart) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Quantity On Cart

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

See the quantity of products added to the cart.

![Media Placeholder](https://user-images.githubusercontent.com/55905671/128712768-142df993-6ac5-40c6-b689-d0da791a5ed7.gif)

:warning: **Quantity On Cart considerations:**
- Does works with products without sku.
- Does not works with promotions that split products.

---
## Configuration 

1. Using your terminal and the [VTEX IO Toolbelt](https://vtex.io/docs/recipes/development/vtex-io-cli-installment-and-command-reference), log into the desired VTEX account.
2. Run `vtex install vtexarg.quantity-on-cart` on the account you're working on.
3. Add the app as a theme peerDependency in the `manifest.json` file;
```json
"peerDependencies": {
  "vtexarg.quantity-on-cart": "2.x"
}
```
4. Add the `quantity-on-cart` to other theme block using the product context, such as the `product-summary.shelf`. In the example below, the `quantity-on-cart` is added to the `flex-layout.col#right-col` block from the `flex-layout.row#product-main` block from the `store.product` template (which uses the product context):

```json
  "store.product": {
    "children": [
      "flex-layout.row#product-main",
    ]
  },
  "flex-layout.row#product": {
    "children": [
      "flex-layout.col#right-col"
    ]
  },
  "flex-layout.col#right-col": {
    "children": [
      "quantity-on-cart"
    ]
  }
```
---
## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles |
| ----------- | 
| `quantityOnCart` | 
---
<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:
<table>
  <tr>
    <td align="center"><a href="https://github.com/germanBonacchi"><img src="https://avatars.githubusercontent.com/u/55905671?v=4" width="100px;" alt=""/><br /><sub><b>Germán Bonacchi</b></sub></a><br /><a href="https://github.com/vtex-apps/quantity-on-cart/commits?author=germanBonacchi" title="Code">💻</a></td>
  </tr>
</table>
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->