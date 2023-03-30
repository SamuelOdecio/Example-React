import {AppBar, Box, Toolbar, Typography} from "@mui/material"
import App from "../../App"

type BaseLayoutProps = {
    children: React.ReactNode
    appBarTitle: string
}

export function BaseLayout({children,appBarTitle}:BaseLayoutProps){

    return (
        <>
        <AppBar>
            <Toolbar>
                <Typography variant="h5">{appBarTitle}</Typography>
            </Toolbar>
        </AppBar>

        <Box display="flex" sx={{}}>
            {children}
        </Box>
        </>
    )
}