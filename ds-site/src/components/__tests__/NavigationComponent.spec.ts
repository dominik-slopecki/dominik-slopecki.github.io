import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NavigationComponent from '../NavigationComponent.vue'

const desktopNavId = '#desktop-nav'

describe('VerifyNavigationComponentRender', () => {
  it('renders properly', () => {
    const wrapper = mount(NavigationComponent, {})
    const navLinksElements = wrapper.find(desktopNavId)
    expect(navLinksElements.text()).toContain('Home')
  })
})
