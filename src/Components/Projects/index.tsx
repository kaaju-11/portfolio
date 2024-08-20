import React from 'react'
import { AboutDegree, Box, BoxContainer, DateWrapper, Degree, EducationWrapper } from 'style/Education'
import { MainContainer} from 'style/Home'
import { CollegeHeading, Heading } from 'style/Skill'

const ProjectSec = () => {
  return (
    <MainContainer>
           <EducationWrapper>
        <Heading
        >
          Projects
        </Heading>
        <BoxContainer>
          <Box>
            <div>
              <CollegeHeading>Rajindra Mishra College</CollegeHeading>
              <Degree>Bachelor of Computer Application</Degree>
              <DateWrapper>August 2017 - February 2021</DateWrapper>
              <AboutDegree>
                - Major: Electronics and Communication Engineering
              </AboutDegree>
              <AboutDegree>- Minor: Information Technology</AboutDegree>
            </div>
          </Box>
        </BoxContainer>
      </EducationWrapper>
    </MainContainer>
  )
}

export default ProjectSec