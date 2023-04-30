function initiateScrollSmooth(speed, smooth) {
	const target = document.documentElement || document.body

	var moving = false
	var pos = target.scrollTop
	target.addEventListener('wheel', scrolled, { passive: false })
	function scrolled(e) {
		e.preventDefault(); // disable default scrolling

		var delta = Math.sign(e.deltaY * -1)

		pos += -delta * speed
		pos = Math.max(0, Math.min(pos, target.scrollHeight - target.clientHeight))

		if (!moving) update()
	}
	function update() {
		moving = true

		const delta = (pos - target.scrollTop) / smooth

		target.scrollTop += delta

		if (Math.abs(delta) > 0.5)
			window.requestAnimationFrame(update)
		else
			moving = false
	}
}
initiateScrollSmooth(150, 3)