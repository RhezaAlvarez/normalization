"use client"

import { Stack, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import React from "react"

interface EmploymentProps {
    employments : any[]
}

const Employment:React.FC<EmploymentProps> = ({ employments }) => {
    return(
        <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
            <Typography variant="body1" sx={{ pt: 1 }}>
                <strong>Employment</strong>
            </Typography>
            <Table size="small">
                <TableHead>
                <TableRow>
                    <TableCell sx={{ p: 0 }} />
                    <TableCell width="50" sx={{ p: 0 }}>
                    <Typography variant="caption">
                        <strong>From</strong>
                    </Typography>
                    </TableCell>
                    <TableCell width="50" sx={{ p: 0 }}>
                    <Typography variant="caption">
                        <strong>To</strong>
                    </Typography>
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {employments.map((o, i) => (
                    <TableRow key={i}>
                    <TableCell sx={{ p: 0 }}>
                        <Typography variant="body2">
                        <strong>{o.employer}</strong>
                        </Typography>
                        <Typography variant="caption">{o.position}</Typography>
                    </TableCell>
                    <TableCell sx={{ p: 0 }}>
                        <Typography variant="caption">{o.from}</Typography>
                    </TableCell>
                    <TableCell sx={{ p: 0 }}>
                        <Typography variant="caption">{o.to}</Typography>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Stack>
    )
}

export default Employment