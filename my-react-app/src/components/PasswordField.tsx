import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { FormControl, IconButton, InputLabel, OutlinedInput, Typography } from "@mui/material";
import { useState, type ChangeEvent, useEffect } from "react";

function PasswordField() {
    const [isVisible, setIsVisible] = useState<Boolean>(false);
    const [inputValue, setInputValue] = useState("");
    const [strength, setStrength] = useState("weak");
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        updateStrength(e.target.value);
    };
    const updateStrength = (newValue: string) => {
        if (newValue.length < 6) return setStrength("weak");
        if (newValue.length < 10) return setStrength("medium");
        return setStrength("strong");
    };
    const getPasswordStrengthMessage = () => {
        if (strength === "weak") return "weak password";
        if (strength === "medium") return "medium password";
        return "strong password";
    };
    const getPasswordStrengthColor = () => {
        if (strength === "weak") return "red";
        if (strength === "medium") return "orange";
        return "green";
    };

    
    useEffect(() => {
        console.log("Visibility changed");
    }, [isVisible]);

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" size="small">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        onChange={handleChange}
                        label="Password"
                        value={inputValue}
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
                <Typography
                    sx={{
                        color: getPasswordStrengthColor(),
                    }}>
                    {getPasswordStrengthMessage()}
                </Typography>
            </div>
        </>
    );
}

export default PasswordField;
