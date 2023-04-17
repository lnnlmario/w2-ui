export type IUseNamespace = {
	b: () => string
	e: (el: string) => string
	m: (modifier: string) => string
	em: (el: string, modifier: string) => string
	is: (name: string, ...args: [boolean | undefined] | []) => string
}

const defaultNamespace = 'w2'
const statePrefix = 'is'

const createBem = (block: string, blockSuffix?: string, element?: string, modifier?: string): string => {
	let cls = block

	// el-form-item__content--error
	if (blockSuffix) {
		cls += `-${blockSuffix}`
	}

	// el-form-item__content
	if (element) {
		cls += `__${element}`
	}

	// el-form-item__content--error
	if (modifier) {
		cls += `--${modifier}`
	}

	return cls
}

export const useNamespace = (block: string, blockSuffix = ''): IUseNamespace => {
	// const ns = needDot ? `.w2-${block}` : `w2-${block}`
	const ns = `${defaultNamespace}-${block}`

	const b = () => createBem(ns, blockSuffix)
	const e = (el: string) => createBem(ns, blockSuffix, el)
	const m = (modifier: string) => createBem(ns, blockSuffix, '', modifier)
	const em = (el: string, modifier: string) => createBem(ns, blockSuffix, el, modifier)
	const is = (name: string, ...args: [boolean | undefined] | []) => {
		const state = args.length >= 1 ? args[0] : true
		return name && state ? `${statePrefix}-${name}` : ''
	}

	return { b, e, m, em, is }
}
