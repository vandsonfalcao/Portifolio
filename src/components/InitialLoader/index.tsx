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
		// style={{ display: porcentage > 260 ? "none" : "block" }}
		>
			{/* bg */}
			<motion.div
				animate={{
					background: ["var(--white)", "unset"],
					transition: { duration: 1,delay: 5 },
				}}
			>
				{/* ContainerGates */}
				<motion.div
					animate={
						porcentage > 100 && {
							rotate: [0, 90, 90],
							width: ["450%", "450%", "450%"],
							height: ["100%", "100%", "200%"],
							transition: { duration: 2 },
						}
					}
				>
					{/* GateOne */}
					<motion.div
						initial={{
							height: "50%",
						}}
						animate={
							porcentage > 100 && { height: 0, transition: { duration: 1, delay: 3, ease: "easeOut" } }
						}
					>
						<section style={{ width: `${porcentage}%` }} />
					</motion.div>
					{/* GateTwo */}
					<motion.div
						initial={{
							height: "50%",
						}}
						animate={
							porcentage > 100 && { height: 0, transition: { duration: 1, delay: 3, ease: "easeOut" } }
						}
					>
						<section style={{ width: `${porcentage}%` }} />
					</motion.div>
				</motion.div>
			</motion.div>
		</Container>
	);
}
