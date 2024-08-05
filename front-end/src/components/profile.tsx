"use client"

import { Stack, Box, Typography, Avatar } from "@mui/material"
import React from "react"

interface ProfileProps {
    profile : any
}

const Profile:React.FC<ProfileProps> = ({ profile }) => {
    return(
        <Stack direction="row" alignItems="center">
            <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" sx={{ py: 1 }}>
                <strong>{profile.name}</strong>
            </Typography>
            <Typography variant="subtitle1">{profile.position}</Typography>
            <Typography variant="subtitle2">{profile.email}</Typography>
            </Box>
            <Box>
            <Avatar src={profile.image} sx={{ height: 150, width: 150 }}>
                Talent Image
            </Avatar>
            </Box>
        </Stack>
    )
}

export default Profile