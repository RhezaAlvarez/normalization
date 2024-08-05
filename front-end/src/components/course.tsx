"use client"

import { Stack, Typography, Table, TableHead, TableRow, TableCell } from "@mui/material"
import React from "react"

interface CourseProps {
    courses : any[]
}

const Course:React.FC<CourseProps> = ({ courses }) => {
    return(
        <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
            <Typography variant="body1" sx={{ pt: 1 }}>
                <strong>Course, Training</strong>
            </Typography>
            <Table size="small">
                <TableHead>
                <TableRow>
                    {['Title', 'Provider', 'Date', 'Duration', 'Certificate'].map((o) => (
                    <TableCell key={o} sx={{ p: 0 }}>
                        <Typography variant="caption">
                        <strong>{o}</strong>
                        </Typography>
                    </TableCell>
                    ))}
                </TableRow>
                {courses.map((o, i) => (
                    <TableRow key={i}>
                    <TableCell sx={{ p: 0 }}>
                        <Typography variant="caption">{o.title}</Typography>
                    </TableCell>
                    <TableCell sx={{ p: 0 }}>
                        <Typography variant="caption">{o.provider}</Typography>
                    </TableCell>
                    <TableCell sx={{ p: 0 }}>
                        <Typography variant="caption">{o.date}</Typography>
                    </TableCell>
                    <TableCell sx={{ p: 0 }}>
                        <Typography variant="caption">{o.duration}</Typography>
                    </TableCell>
                    <TableCell sx={{ p: 0 }}>
                        <Typography variant="caption">{o.certificate}</Typography>
                    </TableCell>
                    </TableRow>
                ))}
                </TableHead>
            </Table>
        </Stack>
    )
}

export default Course