📢 Use this project, [contribute](https://github.com/vtex-apps/product-highlight-by-vtex-segment) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Product Highlight by Vtex Segment

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

Show highlights based on the `regionId` embedded in the `vtex_segment` and `collections` created for each Whitelabel Seller.

![Media Placeholder](https://user-images.githubusercontent.com/55905671/143295939-7d1b5625-5c57-46ad-a197-ef959db268de.gif)

---
## Configuration 

1. Using your terminal and the [VTEX IO Toolbelt](https://vtex.io/docs/recipes/development/vtex-io-cli-installment-and-command-reference), log into the desired VTEX account.
2. Run `vtex install vtexarg.product-highlight-by-vtex-segment` on the account you're working on.
3. Add the app as a theme peerDependency in the `manifest.json` file;
```json
"peerDependencies": {
  "vtexarg.product-highlight-by-vtex-segment": "0.x"
}
```
4. Add the `product-highlight-by-vtex-segment` to other theme block using the product context, such as the `product-summary.shelf`. In the example below, the `quantity-on-cart` is added to the `flex-layout.col#right-col` block from the `flex-layout.row#product-main` block from the `store.product` template (which uses the product context):

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
      "product-highlight-by-vtex-segment"
    ]
  }
```

---
### App Setup

1. Go to the setup of the `Product Highlight by Vtex Segment` component in <https://{workspace}--{account}.myvtex.com/admin/apps/vtexarg.product-highlight-by-vtex-segment@{version}/setup>
![Media Placeholder](https://user-images.githubusercontent.com/55905671/143299640-21b00a57-64bc-467c-917b-34a16d44bc51.png)

2. You will need to add the `Default Seller Id` that you want to use in the case that the `regionId` embedded is `null`. For example: `jumboargentinav692lanus692`.

3. You will need to add the `Default Collection Name` that will be used to find the product belonging to the `collection`. For example: `leyDeGondolas`. 

4. You will need to add the `Image Url of Highlight` that will be used as url of the image that you want to show like Highlight.

---
### Create Collections

To use correctly the component, you need to create a collection for each Whitelabel Seller.

1. Create collection with the name like: `{sellerId}-{defaultCollectionName}`. Where the `{sellerId}` is the `sellerId` of the Whitelabel Seller and the `{defaultCollectionName}` is the `Default Collection Name` that you ingress on the setup. For examole: `jumboargentinav692lanus692-leyDeGondolas`.
![Media Placeholder](https://user-images.githubusercontent.com/55905671/143301880-ee440d48-eced-4750-9cd2-ae3f3588a8e4.png)

2. Add the products that you want to each collection.
![Media Placeholder](https://user-images.githubusercontent.com/55905671/143302007-843220e6-4138-4e9e-932a-33cda0619357.png)

---
### Modus Operandi

1. Regionalizate in some `Whitelabel Seller`.
![Media Placeholder](https://user-images.githubusercontent.com/55905671/143302341-6ba9d940-185f-4c9a-98c5-cb158f285d03.png)

2. See in the products that belongs to the collection that correspond to the `Whitelabel Seller` that you recently regionalizated, a highlight that is an image with the url of the `Image Url of Highlight`.
![Media Placeholder](https://user-images.githubusercontent.com/55905671/143302850-e8d39857-ffb6-49fc-b1cf-a7496733ac4c.png)
---
## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles |
| ----------- | 
| `productHighlightByVtexSegmentContainer` | 
| `imageOfHighlight` | 

---
<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:
<table>
  <tr>
    <td align="center"><a href="https://github.com/germanBonacchi"><img src="https://avatars.githubusercontent.com/u/55905671?v=4" width="100px;" alt=""/><br /><sub><b>Germán Bonacchi</b></sub></a><br /><a href="https://github.com/vtex-apps/product-highlight-by-vtex-segment/commits?author=germanBonacchi" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/arielabaruffaldi"><img src="https://avatars.githubusercontent.com/u/36748003?v=4" width="100px;" alt=""/><br /><sub><b>Ariela Baruffaldi</b></sub></a><br /><a href="https://github.com/vtex-apps/product-highlight-by-vtex-segment/commits?author=arielabaruffaldi" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/GuidoSdo"><img src="https://avatars.githubusercontent.com/u/33711188?v=4" width="100px;" alt=""/><br /><sub><b>Guido Salcedo</b></sub></a><br /><a href="https://github.com/vtex-apps/product-highlight-by-vtex-segment/commits?author=GuidoSdo" title="Code">💻</a></td>
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