# Layout-Row

The Layout-Row app provides block responsible for displaying a two-row layout.<br>

 For example : The below image shows a two-row-layout.<br>
 
 ![image](https://echidna.vteximg.com.br/arquivos/Layout-Row.PNG)
 
 
## Usage

1. Add the `layout-row` app to your theme's dependencies in the manifest.json,<br>

  For example:<br>
  
 ```JSON
  "dependencies": 
  {
  "echidna.layout-row": "0.x"
  }
```
2. Add the block layout-row to the desired .json file and configure the props(refer the table below) as per your stores scenario,<br>

  For example:<br>
  
  ```JSON
{
  "store.custom#nismo-japan-parts": {
    "blocks": [
      "layout-row"
    ]
  },
  "layout-row": {
    "props": {
      "textBlock": "GENUINE 2020 NISSAN Car Parts* PARTS",
      "textContent": "A 2020 Nissan Car Parts combines innovation and efficiency with uncompromised driving enjoyment. Repairing or updating your 2020 Nissan Car Parts with OEM parts ensures that same excitement for the full life of your Nissan.",
      "textBlockProperties": {
        "textImage": "https://echidna.vtexassets.com/arquivos/engine_135.png",
        "textImageHeight": "200px",
        "textImageWidth": "250px",
        "textAlign": "center",
        "textColor": "white",
        "textBackground": "black"
      },
      "imageBlockSrc": "https://echidna.vtexassets.com/arquivos/banner_135.png",
      "imageBlockLink": "/",
      "imageBlockProperties": {
        "fullWidth": true,
        "positionTop": true,
        "imageHeight": "300px"
      },
      "blockClass": "layoutRow"
    }
  }
  ```
   
 ###  layout-row props:
  
| Prop name | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `textBlock`  | `string` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)   The heading displayed in the text block.             | `undefined or ""`              |
| `textContent`  | `string` | The content of the text block.| `undefined or ""`
| `textBlockProperties`  | `object` | Set of properties(refer the below table textBlockProperties props) to customize the text block.| `undefined`|
| `imageBlockSrc`  | `string` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red) The source link of the image block.| `undefined`
| `imageBlockLink`  | `boolean` | Redirection link when the image is clicked.| `undefined`
| `imageBlockProperties`  | `object` | Set of properties(refer the below table imageBlockProperties props) to customize the image block.| `undefined`|


#### textBlockProperties props:
| Prop name | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `textImage`  | `string` | The source link of the text block image.             | `undefined`              |
| `textImageHeight`  | `string` | The height of the text block image.             | `200px`              |
| `textImageWidth`  | `string` | The width of the text block image.| `default`|
| `textAlign`  | `string` | Horizontal alignment of the text.             | `left`              |
| `textColor`  | `string` | The colour of the text.| `black`|
| `textBackground`  | `string` | The background colour of the text block.| `white`|


#### imageBlockProperties props:
| Prop name | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `fullWidth`  | `boolean` | The width of the image block.| `false`|
| `positionTop`  | `boolean` | The position of the image block.             | `false`              |
| `imageHeight`  | `string` | The background colour of the text block.| `default`|


## Customization

Use the below mentioned CSS handles to customize the app according to your stores scenario, for further information on customization using CSS handles, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles |
| ----------- |
| `LayoutRowContainer` |
| `textBlockContainer` |
| `textContainer` |
| `textBlockHeading` |
| `textBlockPara` |
| `textBlockImage` |
| `imageLink` |
| `bannerImage` |

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/reena-p"><img src="https://avatars1.githubusercontent.com/u/42587916?v=4" width="100px;" alt=""/><br /><sub><b>Reena Panwar</b></sub></a><br /><a href="https://github.com/Ashwathnarayanar-tech/layout-row/commits?author=reena-p" title="Code">💻</a></td>    
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
