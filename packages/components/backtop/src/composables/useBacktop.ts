import { ref, onMounted, onBeforeUnmount  } from 'vue'
import { BacktopProps } from '../backtopTypes'

const useBacktop = (props: BacktopProps) => {
	const htmlEl = document.documentElement
	const visible = ref(false)

	const handleClick = () => {
		// 滚动到页面顶部
		htmlEl.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	const handleScroll = (e: Event) => {
		// 滚动高度大于可见高度，显示回到顶部按钮
		visible.value = htmlEl.scrollTop > props.visibilityHeight
	}

	onMounted(() => {
		document.addEventListener('scroll', handleScroll)
	})

	onBeforeUnmount(() => {
		document.removeEventListener('scroll', handleScroll)
	})

	return { visible, handleClick }
}

export default useBacktop
