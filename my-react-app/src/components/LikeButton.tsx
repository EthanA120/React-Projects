import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import { useState } from "react";

function LikeButton() {
	const [isLiked, setIsLiked] = useState<Boolean>(false);

	return (
		<>
			<IconButton onClick={() => setIsLiked((prev) => !prev)}>
				<FavoriteBorderIcon sx={{ color: isLiked ? "Red" : "Black" }}></FavoriteBorderIcon>
			</IconButton>
		</>
	);
}

export default LikeButton;