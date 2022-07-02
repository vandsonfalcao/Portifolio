// Modules
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Interfaces
interface Item {
	title: string;
	place: string;
	time: string;
	desc: string;
}
interface HistoryPointProps {
	item: Item;
	ident: number;
	length: number;
}

export default function HistoryPoint({ item, ident, length }: HistoryPointProps) {
	// Animations
	const { ref, inView } = useInView();
	const animation = useAnimation();
	const point = {
		visible: {
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.2,
			},
		},
	};
	const text = {
		hidden: { opacity: 0, y: +20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.2 },
		},
	};
	return (
		<>
			<motion.div ref={ref} variants={point} animate={inView ? "visible" : "hidden"}>
				<motion.div variants={text}></motion.div>
				<motion.h3 variants={text}>{item.title}</motion.h3>
				<motion.p variants={text}>
					<strong>{item.place}</strong>
				</motion.p>
				<motion.span variants={text}>{item.time}</motion.span>
				<motion.p variants={text}>{item.desc}</motion.p>
			</motion.div>
			{(ident + 2) % 2 === 0 && (
				<>
					<div className="empty"></div>
					{!(ident + 2 > length) && <div className="empty"></div>}
				</>
			)}
		</>
	);
}
