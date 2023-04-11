import { COLOR_THEME, GRAPHIC_PATTERN } from 'src/common/constants'
import Hero from 'src/components/hero/Hero'

export default {
  title: 'Presidio/Hero',
  component: Hero,
}

const Template = (args) => <Hero {...args} />

// CRISSY FIELD /////////////////////////////////////////////////

export const HeroLevel1CrissyField = Template.bind({})
HeroLevel1CrissyField.args = {
  data: {
    hero: {
      page_level: 'page_level_1',
      heading: 'Place Name Lorem Ipsum Dolor',
      sub_heading:
        'Baker Beach is one of San Francisco’s best beaches, offering a sandy shore and views of Golden Gate Bridge.',
      background_color: COLOR_THEME.CRISSY_FIELD,
    },
  },
}

export const HeroLevel1CrissyFieldBeachStrawberry = Template.bind({})
HeroLevel1CrissyFieldBeachStrawberry.args = {
  data: {
    hero: {
      page_level: 'page_level_1',
      heading: 'Place Name Lorem Ipsum Dolor',
      sub_heading:
        'Baker Beach is one of San Francisco’s best beaches, offering a sandy shore and views of Golden Gate Bridge.',
      background_color: COLOR_THEME.CRISSY_FIELD,
      graphic_pattern: GRAPHIC_PATTERN.BEACH_STRAWBERRY,
    },
  },
}

export const HeroLevel1CrissyFieldManzanita = Template.bind({})
HeroLevel1CrissyFieldManzanita.args = {
  data: {
    hero: {
      page_level: 'page_level_1',
      heading: 'Place Name Lorem Ipsum Dolor',
      sub_heading:
        'Baker Beach is one of San Francisco’s best beaches, offering a sandy shore and views of Golden Gate Bridge.',
      background_color: COLOR_THEME.CRISSY_FIELD,
      graphic_pattern: GRAPHIC_PATTERN.MANZANITA,
    },
  },
}

export const HeroLevel1CrissyFieldPelican = Template.bind({})
HeroLevel1CrissyFieldPelican.args = {
  data: {
    hero: {
      page_level: 'page_level_1',
      heading: 'Place Name Lorem Ipsum Dolor',
      sub_heading:
        'Baker Beach is one of San Francisco’s best beaches, offering a sandy shore and views of Golden Gate Bridge.',
      graphic_pattern: GRAPHIC_PATTERN.PELICAN,
      background_color: COLOR_THEME.CRISSY_FIELD,
    },
  },
}

// CYPRESS GREEN /////////////////////////////////////////////////

export const HeroLevel1CypressGreen = Template.bind({})
HeroLevel1CypressGreen.args = {
  data: {
    hero: {
      page_level: 'page_level_1',
      heading: 'Place Name Lorem Ipsum Dolor',
      sub_heading:
        'Baker Beach is one of San Francisco’s best beaches, offering a sandy shore and views of Golden Gate Bridge.',
      background_color: COLOR_THEME.CYPRESS_GREEN,
    },
  },
}

export const HeroLevel1CypressGreenBeachStrawberry = Template.bind({})
HeroLevel1CypressGreenBeachStrawberry.args = {
  data: {
    hero: {
      page_level: 'page_level_1',
      heading: 'Place Name Lorem Ipsum Dolor',
      sub_heading:
        'Baker Beach is one of San Francisco’s best beaches, offering a sandy shore and views of Golden Gate Bridge.',
      background_color: COLOR_THEME.CYPRESS_GREEN,
      graphic_pattern: GRAPHIC_PATTERN.BEACH_STRAWBERRY,
    },
  },
}

export const HeroLevel1CypressGreenManzanita = Template.bind({})
HeroLevel1CypressGreenManzanita.args = {
  data: {
    hero: {
      page_level: 'page_level_1',
      heading: 'Place Name Lorem Ipsum Dolor',
      sub_heading:
        'Baker Beach is one of San Francisco’s best beaches, offering a sandy shore and views of Golden Gate Bridge.',
      background_color: COLOR_THEME.CYPRESS_GREEN,
      graphic_pattern: GRAPHIC_PATTERN.MANZANITA,
    },
  },
}

export const HeroLevel1CypressGreenPelican = Template.bind({})
HeroLevel1CypressGreenPelican.args = {
  data: {
    hero: {
      page_level: 'page_level_1',
      heading: 'Place Name Lorem Ipsum Dolor',
      sub_heading:
        'Baker Beach is one of San Francisco’s best beaches, offering a sandy shore and views of Golden Gate Bridge.',
      graphic_pattern: GRAPHIC_PATTERN.PELICAN,
      background_color: COLOR_THEME.CYPRESS_GREEN,
    },
  },
}

// LEVEL 2 AND 3 /////////////////////////////////////////////////

export const HeroLevel2 = Template.bind({})
HeroLevel2.args = {
  data: {
    hero: {
      page_level: 'page_level_2',
      heading: 'Place Name Lorem Ipsum Dolor',
      sub_heading:
        'Baker Beach is one of San Francisco’s best beaches, offering a sandy shore and views of Golden Gate Bridge.',
      graphic_pattern: GRAPHIC_PATTERN.PELICAN,
      background_color: COLOR_THEME.CRISSY_FIELD,
    },
  },
}

export const HeroLevel3 = Template.bind({})
HeroLevel3.args = {
  data: {
    hero: {
      page_level: 'page_level_3',
      heading: 'Place Name Lorem Ipsum Dolor',
      sub_heading:
        'Baker Beach is one of San Francisco’s best beaches, offering a sandy shore and views of Golden Gate Bridge.',
      graphic_pattern: GRAPHIC_PATTERN.PELICAN,
      background_color: COLOR_THEME.CRISSY_FIELD,
    },
  },
}
