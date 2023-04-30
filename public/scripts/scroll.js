function initiateScrollSmooth(speed, smooth) {
	const target = document.documentElement
	var moving = false
	var position = target.scrollTop
	target.addEventListener('wheel', function scrolled(event) {
		event.preventDefault(); // disable default scrolling

		var delta = Math.sign(event.deltaY * -1)

		position += -delta * speed
		position = Math.max(0, Math.min(position, target.scrollHeight - target.clientHeight))

		if (!moving) update()
	}, { passive: false })
	function update() {
		moving = true

		const delta = (position - target.scrollTop) / smooth

		target.scrollTop += delta

		if (Math.abs(delta) > 0.5)
			window.requestAnimationFrame(update)
		else
			moving = false
	}
}
initiateScrollSmooth(150, 3)