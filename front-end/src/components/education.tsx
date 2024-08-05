"use client"

import { Stack, Typography, Table, TableHead, TableRow, TableCell } from "@mui/material"
import React from "react"

interface EducationProps {
    educations : any[]
}

const Education:React.FC<EducationProps> = ({ educations }) => {
    return(
        <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
            <Typography variant="body1" sx={{ pt: 1 }}>
                <strong>Education</strong>
            </Typography>
            <Table size="small">
                <TableHead>
                <TableRow>
                    {['School', 'Degree', 'Subject', 'From', 'To'].map((o) => (
                    <TableCell key={o} sx={{ p: 0 }}>
                        <Typography variant="caption">
                        <strong>{o}</strong>
                        </Typography>
                    </TableCell>
                    ))}
                </TableRow>
                {educations.map((o, i) => (
                    <TableRow key={i}>
                    <TableCell sx={{ p: 0 }}>
                        <Typography variant="caption">{o.school}</Typography>
                    </TableCell>
                    <TableCell sx={{ p: 0 }}>
                        <Typography variant="caption">{o.degree}</Typography>
                    </TableCell>
                    <TableCell sx={{ p: 0 }}>
                        <Typography variant="caption">{o.subject}</Typography>
                    </TableCell>
                    <TableCell sx={{ p: 0 }}>
                        <Typography variant="caption">{o.from}</Typography>
                    </TableCell>
                    <TableCell sx={{ p: 0 }}>
                        <Typography variant="caption">{o.to}</Typography>
                    </TableCell>
                    </TableRow>
                ))}
                </TableHead>
            </Table>
        </Stack>
    )
}

export default Education