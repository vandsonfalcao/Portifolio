// Modules
import { motion, useTransform, useViewportScroll } from "framer-motion";
import Image from "next/image";

import char from "../../../public/char.jpg";

// Style
import { Container } from "./style";

export default function Presentation() {
	const { scrollYProgress } = useViewportScroll();
	const frameColor = useTransform(scrollYProgress, [0.726, 0.727], ["#fff", "#000"]);

	return (
		<Container className="responsive-container">
			<div className="responsive-content">
				<section>
					<motion.h2 style={{}}>Apresentação</motion.h2>
				</section>
				<section>
					<div>
						aopfjhd asaspodj fn asp aposdkfopasd aspdokasd opasdokfnsdokfn aosdasod oasd
						aosdsad msndmflasd lsdfls dflsdflas daopfjhd asaspodj fn asp aposdkfopasd
						aspdokasd opasdokfnsdokfn aosdasod oasd aosdsad msndmflasd lsdfls dflsdflas
						daopfjhd asaspodj fn asp aposdkfopasd aspdokasd opasdokfnsdokfn aosdasod
						oasd aosdsad msndmflasd lsdfls dflsdflas daopfjhd asaspodj fn asp
						aposdkfopasd aspdokasd opasdokfnsdokfn aosdasod oasd aosdsad msndmflasd
						lsdfls dflsdflas daopfjhd asaspodj fn asp aposdkfopasd aspdokasd
						opasdokfnsdokfn aosdasod oasd aosdsad msndmflasd lsdfls dflsdflas daopfjhd
						asaspodj fn asp aposdkfopasd aspdokasd opasdokfnsdokfn aosdasod oasd aosdsad
						msndmflasd lsdfls dflsdflas d lsdfls dflsdflas daopfjhd
						asaspodj fn asp aposdkfopasd aspdokasd opasdokfnsdokfn aosdasod oasd aosdsad
						msndmflasd lsdfls dflsdflas daopfjhd asaspodj fn asp aposdkfopasd aspdokasd
						opasdokfnsdokfn aosdasod oasd aosdsad msndmflasd lsdfls dflsdflas daopfjhd
						asaspodj fn asp aposdk fn asp aposdkfopasd aspdokasd
						opasdokfnsdokfn aosdasod oasd aosdsad msndmflasd lsdfls dflsdflas daopfjhd
						asaspodj fn asp aposdkfopasd aspdokasd opasdokfnsdokfn aosdasod oasd aosdsad
						msndmflasd lsdfls dflsdflas daopfjhd asaspodj fn asp aposdkfopasd aspdokasd
						opasdokfnsdokfn aosdasod oasd aosdsad msndmflasd lsdfls dflsdflas daopfjhd
						asaspodj fn asp aposdkfopasd aspdokasd opasdokfnsdokfn aosdasod oasd aosdsad
					</div>
					<div>
						<Image src={char} alt="" />
					</div>
				</section>
			</div>
		</Container>
	);
}
