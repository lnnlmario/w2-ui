import { describe, expect, it } from 'vitest'
import { useNamespace } from '../useNamespace'

describe('use namespace without block suffix.', () => {
  const ns = useNamespace('test')
	it('just block', () => {
		expect(ns.b()).toBe('w2-test')
	})
	it('block and element', () => {
		expect(ns.e('wrapper')).toBe('w2-test__wrapper')
	})
	it('block and modify', () => {
		expect(ns.m('disabled')).toBe('w2-test--disabled')
	})
	it('block and element and modify', () => {
		expect(ns.em('wrapper', 'disabled')).toBe('w2-test__wrapper--disabled')
	})
	it('is disabled', () => {
		expect(ns.is('disabled')).toBe('is-disabled')
		expect(ns.is('disabled', true)).toBe('is-disabled')
	})
	it('not disabled', () => {
		expect(ns.is('disabled', false)).toBe('')
	})
})

describe('use namespace with block suffix.', () => {
  const ns = useNamespace('test', 'item')
	it('just block', () => {
		expect(ns.b()).toBe('w2-test-item')
	})
	it('block and element', () => {
		expect(ns.e('wrapper')).toBe('w2-test-item__wrapper')
	})
	it('block and modify', () => {
		expect(ns.m('disabled')).toBe('w2-test-item--disabled')
	})
	it('block and element and modify', () => {
		expect(ns.em('wrapper', 'disabled')).toBe('w2-test-item__wrapper--disabled')
	}),
	it('is disabled', () => {
		expect(ns.is('disabled')).toBe('is-disabled')
		expect(ns.is('disabled', true)).toBe('is-disabled')
	})
	it('not disabled', () => {
		expect(ns.is('disabled', false)).toBe('')
	})
})
