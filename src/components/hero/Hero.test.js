import { render } from '@testing-library/react'
import { COLOR_THEME, GRAPHIC_PATTERN } from 'src/common/constants'
import Hero from 'src/components/hero/Hero'

const data = {
  hero: {
    page_level: 'page_level_1',
    heading: 'Place Name Lorem Ipsum Dolor',
    sub_heading:
      'Baker Beach is one of San Francisco’s best beaches, offering a sandy shore and views of Golden Gate Bridge.',
    background_color: COLOR_THEME.CYPRESS_GREEN,
    graphic_pattern: GRAPHIC_PATTERN.BEACH_STRAWBERRY,
  },
}

describe('Hero', () => {
  test('renders Hero without crashing if no data is passed', () => {
    render(<Hero />)
  })

  test('renders Quick links with data', () => {
    render(<Hero data={data} />)
  })
})
