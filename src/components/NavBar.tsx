import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Tooltip,
    useTheme
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import GroupIcon from "@mui/icons-material/Group";

/**
 * Navbar component.
 */
export default function Navbar() {
    const theme = useTheme();
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: theme.palette.background.default,
                boxShadow: "none",
                borderBottom: `1px solid ${theme.palette.divider}`
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        color: theme.palette.text.primary,
                        fontWeight: "bold",
                        cursor: "pointer",
                        "&:hover": {
                            color: theme.palette.primary.main
                        }
                    }}
                >
                    <Box
                        component="span"
                        sx={{ color: theme.palette.primary.main }}
                    >
                        A
                    </Box>
                    thletics
                    <Box
                        component="span"
                        sx={{ color: theme.palette.primary.main }}
                    >
                        M
                    </Box>
                    eet
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Tooltip title="Home">
                        <IconButton
                            component={Link}
                            to="/"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <HomeIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Hotels">
                        <IconButton
                            component={Link}
                            to="/hotels"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <HomeIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Rooms">
                        <IconButton
                            component={Link}
                            to="/rooms"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <SportsHandballIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Guests">
                        <IconButton
                            component={Link}
                            to="/guests"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <GroupIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Reservations">
                        <IconButton
                            component={Link}
                            to="/reservations"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            <SportsScoreIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
