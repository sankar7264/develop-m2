import QuickLinks from 'src/components/quick-links/QuickLinks'

export default {
  title: 'Presidio/QuickLinks',
  component: QuickLinks,
  argTypes: {
    maxWidth: {
      name: 'Max Width',
      type: { name: 'string', required: false },
      defaultValue: '250px',
      control: {
        type: 'text',
      },
    },
  },
}

const Template = (args) => <QuickLinks {...args} />

export const CypressGreenVersion = Template.bind({})
CypressGreenVersion.args = {
  data: {
    section_title: 'Quick',
    section_id: 'quick_1679911551015',
    title: 'Module Title',
    quick_links: {
      acf_fc_layout: 'quick_links',
      section_title: 'Quick',
      section_id: 'quick_1679911551015',
      background_color: 'cypress_green',
      layout: 'right',
      title: 'Module Title',
      description:
        'Cras ac mauris finibus, tempus tellus ut, tempus mi. Vestibulum sed metus aliquet, congue lacus nec, viverra ex. Vivamus non augue vestibulum, sodales felis quis, vestibulum urna.',
      links: [
        {
          link: {
            title: 'Link',
            url: '#',
            target: '0',
          },
          description:
            'Cras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tel',
        },
        {
          link: {
            title: '',
            url: '#',
            target: '0',
          },
          description: '',
        },
        {
          link: {
            title: '',
            url: '#',
            target: '0',
          },
          description: '',
        },
      ],
    },
  },
}

export const BakerBeachVersion = Template.bind({})
BakerBeachVersion.args = {
  data: {
    section_title: 'Quick',
    section_id: 'quick_1679911551015',
    title: 'Module Title',
    quick_links: {
      acf_fc_layout: 'quick_links',
      section_title: 'Quick',
      section_id: 'quick_1679911551015',
      background_color: 'baker_beach',
      layout: 'right',
      title: 'Module Title',
      description:
        'Cras ac mauris finibus, tempus tellus ut, tempus mi. Vestibulum sed metus aliquet, congue lacus nec, viverra ex. Vivamus non augue vestibulum, sodales felis quis, vestibulum urna.',
      links: [
        {
          link: {
            title: 'Link',
            url: '#',
            target: '0',
          },
          description:
            'Cras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tel',
        },
        {
          link: {
            title: '',
            url: '#',
            target: '0',
          },
          description: '',
        },
        {
          link: {
            title: '',
            url: '#',
            target: '0',
          },
          description: '',
        },
      ],
    },
  },
}

export const LeftLayoutType = Template.bind({})
LeftLayoutType.args = {
  data: {
    section_title: 'Quick',
    section_id: 'quick_1679911551015',
    title: 'Module Title',
    quick_links: {
      acf_fc_layout: 'quick_links',
      section_title: 'Quick',
      section_id: 'quick_1679911551015',
      background_color: 'cypress_green',
      layout: 'left',
      title: 'Module Title',
      description:
        'Cras ac mauris finibus, tempus tellus ut, tempus mi. Vestibulum sed metus aliquet, congue lacus nec, viverra ex. Vivamus non augue vestibulum, sodales felis quis, vestibulum urna.',
      links: [
        {
          link: {
            title: 'Link',
            url: '#',
            target: '0',
          },
          description:
            'Cras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tel',
        },
        {
          link: {
            title: '',
            url: '#',
            target: '0',
          },
          description: '',
        },
        {
          link: {
            title: '',
            url: '#',
            target: '0',
          },
          description: '',
        },
      ],
    },
  },
}

export const RightLayoutType = Template.bind({})
RightLayoutType.args = {
  data: {
    section_title: 'Quick',
    section_id: 'quick_1679911551015',
    title: 'Module Title',
    quick_links: {
      acf_fc_layout: 'quick_links',
      section_title: 'Quick',
      section_id: 'quick_1679911551015',
      background_color: 'cypress_green',
      layout: 'right',
      title: 'Module Title',
      description:
        'Cras ac mauris finibus, tempus tellus ut, tempus mi. Vestibulum sed metus aliquet, congue lacus nec, viverra ex. Vivamus non augue vestibulum, sodales felis quis, vestibulum urna.',
      links: [
        {
          link: {
            title: 'Link',
            url: '#',
            target: '0',
          },
          description:
            'Cras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tellus ut, tempus mi.utututCras ac mauris finibus, tempus tel',
        },
        {
          link: {
            title: '',
            url: '#',
            target: '0',
          },
          description: '',
        },
        {
          link: {
            title: '',
            url: '#',
            target: '0',
          },
          description: '',
        },
      ],
    },
  },
}
