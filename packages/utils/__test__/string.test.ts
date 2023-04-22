import { describe, expect, it } from 'vitest'
import { capitalize } from '../string'

describe('capitalize', () => {
	it('should capitalize the first letter of a string', () => {
		expect(capitalize('lnnlmario')).toBe('Lnnlmario')
		expect(capitalize('Alnnlmario')).toBe('Alnnlmario')
		expect(capitalize('lnnl mario')).toBe('Lnnl mario')
		expect(capitalize('1nnlmario')).toBe('1nnlmario')
		expect(capitalize('@lnnlmario')).toBe('@lnnlmario')
	})
})
