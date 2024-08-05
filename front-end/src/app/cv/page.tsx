"use client"
import Course from "@/components/course"
import Education from "@/components/education"
import Employment from "@/components/employment"
import Objective from "@/components/objective"
import Profile from "@/components/profile"
import Project from "@/components/project"
import { Box, Stack, Divider, Typography } from "@mui/material"
import DATA from "@/data/data.json"

const CuriculumVitae = () => {
  return(
    <div>
      <Box component="table" sx={{ width: '100%' }}>
          <Box component="thead">
              <Box component="tr">
                  <Box component="td">
                      <Box className="page-header-space" />
                  </Box>
              </Box>
          </Box>   

          <Box component="tbody">
              <Box component="tr">
                  <Box
                  component="td"
                  sx={{
                      py: 2,
                      px: 6,
                  }}
                  >
                      <Stack direction="column" spacing={1} alignItems="stretch">
                          <Profile profile={DATA.employee}/>
                          <Stack direction="row" spacing={1} justifyContent="stretch">
                            <Employment employments={DATA.histories.employment} />
                            <Divider orientation="vertical" flexItem />
                            <Objective biodata={DATA.employee.biodata} />
                          </Stack>
                          <Divider flexItem />
                          <Stack direction="row" spacing={1} justifyContent="stretch" sx={{ pb: 2, pageBreakAfter: 'always' }}>
                            <Course courses={DATA.histories.certification} />
                            <Divider orientation="vertical" flexItem />
                            <Education educations={DATA.histories.education} />
                          </Stack>
                          <Stack direction="row" spacing={1} justifyContent="stretch" sx={{ pt: 2 }}>
                            <Project projects={DATA.histories.project}/>
                          </Stack>
                          <Typography variant="caption" color="GrayText" sx={{ pt: 4, alignSelf: 'center' }}>
                          PT Padepokan Tujuh Sembilan
                          </Typography>
                      </Stack>
                  </Box>
              </Box>
          </Box>

          <Box component="tfoot">
                <Box component="tr">
                    <Box component="td">
                        <Box className="page-footer-space" />
                    </Box>
                </Box>
          </Box>
      </Box>
    </div>
  )
}

export default CuriculumVitae