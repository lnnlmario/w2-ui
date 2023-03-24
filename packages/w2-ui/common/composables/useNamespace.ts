export type UseNamespace = {
	b: () => string
	e: (el: string) => string
	m: (modifier: string) => string
	em: (el: string, modifier: string) => string
}

const createBem = (block: string, element?: string, modifier?: string): string => {
	let cls = block

	if (element) {
		cls += `__${element}`
	}

	if (modifier) {
		cls += `--${modifier}`
	}

	return cls
}

const useNamespace = (block: string, needDot = false): UseNamespace => {
	const ns = needDot ? `.w2-${block}` : `w2-${block}`

	const b = () => createBem(ns)
	const e = (el: string) => createBem(ns, el)
	const m = (modifier: string) => createBem(ns, '', modifier)
	const em = (el: string, modifier: string) => createBem(ns, el, modifier)

	return { b, e, m, em }
}

export default useNamespace
