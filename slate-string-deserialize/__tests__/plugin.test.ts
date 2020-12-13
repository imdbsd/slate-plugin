import deserialiaze from '../src/index'

const singleLineTest = 'lorem ipsum dollor'.trim()
const multipleLineTest = `
one
two
`.trim()
const customDelimiterTest = `
custom delimiter-test input
`.trim()
const customDefaultMark = `
custom default mark
test input
`.trim()
const customDefaultElement = `
custom default element
test input
`.trim()

describe('deserializer test', () => {
  test('single line', () => {
    const value = deserialiaze(singleLineTest)
    expect(value).toEqual([
      {type: 'paragraph', children: [{text: 'lorem ipsum dollor'}]},
    ])
  })

  test('multiple line', () => {
    const value = deserialiaze(multipleLineTest)
    expect(value).toEqual([
      {type: 'paragraph', children: [{text: 'one'}]},
      {type: 'paragraph', children: [{text: 'two'}]},
    ])
  })

  test('custom delimiter', () => {
    const value = deserialiaze(customDelimiterTest, {delimiter: '-'})
    expect(value).toEqual([
      {type: 'paragraph', children: [{text: 'custom delimiter'}]},
      {type: 'paragraph', children: [{text: 'test input'}]},
    ])
  })

  test('custom default marks', () => {
    const defaultMarks = {
      bold: true,
      italic: true,
      underline: false,
    }
    const value = deserialiaze(customDefaultMark, {
      defaultMarks,
    })
    expect(value).toEqual([
      {
        type: 'paragraph',
        children: [{text: 'custom default mark', ...defaultMarks}],
      },
      {type: 'paragraph', children: [{text: 'test input', ...defaultMarks}]},
    ])
  })

  test('custom default element', () => {
    const defaultElement = 'line'
    const value = deserialiaze(customDefaultElement, {defaultElement})
    console.log(JSON.stringify(value))
    expect(value).toEqual([
      {type: defaultElement, children: [{text: 'custom default element'}]},
      {type: defaultElement, children: [{text: 'test input'}]},
    ])
  })
})
