import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Container from "./style";

export default function InitialLoader() {
	const [porcentage, setPorcentage] = useState(1);

	useEffect(() => {
		if (porcentage <= 260) {
			const timer = setTimeout(() => setPorcentage((prev) => prev + 2), 50);
			return () => clearTimeout(timer);
		}
	}, [porcentage]);

	return (
		<Container
			initial={{
				rotate: 0,
				height: "100vh",
			}}
			animate={
				porcentage > 100 && {
					rotate: 90,
					height: "100vw",
					transition: { duration: 1.5 },
				}
			}
			style={{ display: porcentage > 260 ? "none" : "block" }}
		>
			<motion.div
				initial={{
					height: "50%",
				}}
				animate={porcentage > 100 && { height: 0, transition: { duration: 1, delay: 3 } }}
			>
				<section style={{ width: `${porcentage}%` }} />
			</motion.div>
			<motion.div
				initial={{
					height: "50%",
				}}
				animate={porcentage > 100 && { height: 0, transition: { duration: 1, delay: 3 } }}
			>
				<section style={{ width: `${porcentage}%` }} />
			</motion.div>
		</Container>
	);
}
