import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FormControl, IconButton, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";

function PasswordField() {
    const [isVisible, setIsVisible] = useState<Boolean>(false);

    return (
        <>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" size="small">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    label="Password"
                    id="outlined-size-small"
                    size="small"
                    type={isVisible ? "password" : "text"}
                    endAdornment={
                        <IconButton
                            title={isVisible ? 'display the password' : 'hide the password'}
                            edge="end"
                            onClick={() => setIsVisible((prev) => !prev)}
                        >
                            {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                    }
                />
            </FormControl>
        </>
    );
}

export default PasswordField;