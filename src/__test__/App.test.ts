import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  const wrapper = mount(App)

  it('should render properly', () => {
    expect(wrapper.text()).toContain('Coding Test')
  })

  it('should handle input', async () => {
    await wrapper.find('textarea').setValue('{"a":[1,1]}')
    const result = wrapper.find('.result')
    expect(JSON.stringify(JSON.parse(result.text()))).toContain('{"a":[1]}')
  })
})
