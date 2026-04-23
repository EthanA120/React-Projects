import { TextField } from "@mui/material";
import { useState, type ChangeEvent, useEffect } from "react";

function TextKeeper() {
    const [post, setPost] = useState(localStorage.getItem("savedPost") ?? "");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPost(e.target.value);
    };

    useEffect(() => {
        localStorage.setItem("savedPost", post);
    }, [post]);

    return (
        <>
            <TextField
                onChange={handleChange}
                id="outlined-required"
                label="Put Some Text Here"
                defaultValue={post}
            />
        </>
    );
}

export default TextKeeper;
