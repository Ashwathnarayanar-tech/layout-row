import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import LayoutRow from '../LayoutRow'

configure({ adapter: new Adapter() })

describe('Element', () => {
  const element = shallow(
    <LayoutRow
      textContent="A 2020 Nissan Car"
      textBlockProperties={{
        textImage: 'https://echidna.vtexassets.com/arquivos/engine_135.png',
        textImageHeight: '200px',
        textImageWidth: '450px',
        textAlign: 'center',
        textColor: 'white',
        textBackground: 'black',
      }}
      imageBlockSrc="https://echidna.vtexassets.com/arquivos/banner_135.png"
      imageBlockLink="/"
      imageBlockProperties={{
        fullWidth: true,
        positionTop: true,
        imageHeight: '300px',
      }}
    />
  )
  test('Image Element render Test', () => {
    const ImgElementExists = element.find('div a img').exists()
    expect(ImgElementExists).toBe(true)
  })
  test('Text Element render Test', () => {
    const TxtElementExists = element.find('div div div h2').exists()
    expect(TxtElementExists).toBe(true)
  })
  test('Text Heading content check', () => {
    const textHeading = element.find('div div div p')
    expect(textHeading.text()).toBe('A 2020 Nissan Car')
  })

  test('should render in "debug" mode', () => {
    const component = shallow(
      <LayoutRow
        debug
        textContent="A 2020 Nissan Car"
        textBlockProperties={{
          textImage: 'https://echidna.vtexassets.com/arquivos/engine_135.png',
          textImageHeight: '200px',
          textImageWidth: '450px',
          textAlign: 'center',
          textColor: 'white',
          textBackground: 'black',
        }}
        imageBlockSrc="https://echidna.vtexassets.com/arquivos/banner_135.png"
        imageBlockLink="/"
        imageBlockProperties={{
          fullWidth: true,
          positionTop: true,
          imageHeight: '300px',
        }}
      />
    )
    expect(component).toMatchSnapshot()
  })
})
