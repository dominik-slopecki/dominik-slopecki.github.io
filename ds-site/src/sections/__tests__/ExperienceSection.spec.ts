import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ExperienceSection from '../ExperienceSection.vue'

describe('VerifyExperienceSectionRender', () => {
  it('renders properly', () => {
    const wrapper = mount(ExperienceSection, {})
    expect(wrapper.text()).toContain('Professional Experience')
  })
})

describe('VerifyExperienceElementsVisibility', () => {
  it('first job named Efigence is visible', () => {
    const wrapper = mount(ExperienceSection, {})
    expect(wrapper.text()).toContain('Efigence')
  })
})
