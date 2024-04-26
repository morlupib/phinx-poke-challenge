import {
	LinearProgress,
	Typography,
	linearProgressClasses,
	styled,
} from "@mui/material";
import { FC } from "react";

const MIN = 0;
const MAX = 10;
const normalise = (value: number) => ((value - MIN) * 100) / (MAX - MIN);

const BorderLinearProgress = styled(LinearProgress)(() => ({
	height: 10,
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: "#fafafa",
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: "#75fc4d",
	},
}));

interface StatProps {
	value: number;
	text: string;
}

export const Stat: FC<StatProps> = ({ value, text }) => {
	return (
		<>
			<Typography variant="body1" color="textSecondary">
				{text}
			</Typography>
			<BorderLinearProgress
				variant="determinate"
				color="success"
				value={normalise(value)}
			/>
		</>
	);
};
