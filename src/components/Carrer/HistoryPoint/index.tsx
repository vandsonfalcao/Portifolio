// Modules
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Interfaces
interface Item {
	title: string;
	place: string;
	time: string;
	desc: string;
}
interface HistoryPointProps {
	pos: number
	item: Item;
	length: number;
}

export default function HistoryPoint({ item, pos, length }: HistoryPointProps) {
	// Animations
	const { ref, inView } = useInView();
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
				<motion.p variants={text} dangerouslySetInnerHTML={{ __html: item.desc }} />
			</motion.div>
			{pos % 2 !== 0 && (
				<>
					<div className="empty"></div>
					{!(pos + 1 > length) && <div className="empty"></div>}
				</>
			)}
		</>
	);
}
