import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BackgroundOverlayComponent from '../BackgroundOverlayComponent.vue'

const overlayElementId = '#background-overlay'

describe('VerifyBackgroundOverlayComponentRender', () => {
  it('renders properly', () => {
    const wrapper = mount(BackgroundOverlayComponent, {})
    const overlayElement = wrapper.find(overlayElementId)
    expect(overlayElement.html()).toContain('path')
    expect(overlayElement.html()).toContain('fixed')
  })
})
