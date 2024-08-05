"use client"
import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function CuriculumVitaeLayout({ children } : { children: ReactNode }){
    return(
        <div>
            <Box className="page-header">
                <img src="/Header.png" alt="" width="100%" height="50px" />
                <Box component="img" src="/Logo.svg" alt="" sx={{ height: 50, position: 'absolute', top: 50, left: 50 }} />
            </Box>
            
            <Box className="page-footer">
                <img src="/Footer.png" alt="" width="100%" height="50px" />
            </Box>

            {children}
        </div>
    )
}