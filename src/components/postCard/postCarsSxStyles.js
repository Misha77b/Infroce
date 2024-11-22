export const cardSxStyle = {
	position: "relative",
	padding: "10px",
	width: "310px",
	height: "260px",
	border: "2px solid lightgray",
	borderRadius: "10px",
	boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
	"&:hover": {
		border: "2px solid rgba(0, 0, 255, 0.3)",
		boxShadow:
			"rgba(0, 0, 255, 0.16) 0px 10px 36px 0px, rgba(0, 0, 255, 0.3) 0px 0px 0px 1px",
	},
	"@media screen and (max-width: 600px)": {
		width: "300px",
	},
};

export const likeBtn = {
	position: "absolute",
	bottom: "0",
	right: "10px",
	display: "flex",
	gap: "15px",
};
