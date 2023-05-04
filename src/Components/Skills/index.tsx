import React from 'react'
import { RiHtml5Fill, RiReactjsLine } from 'react-icons/ri'
import { TbBrandCss3, TbBrandJavascript, TbBrandTypescript } from 'react-icons/tb'
import {BiGitMerge} from "react-icons/bi"
import { Container, GridContainer, GridItem, Heading, WrapperContainer } from 'style/skills'

const SkillsSec = () => {
  return (
    <WrapperContainer>
        <Container>
            <Heading>Skills</Heading>
            <GridContainer>
                <GridItem><RiHtml5Fill /></GridItem>
                <GridItem><TbBrandCss3 /></GridItem>
                <GridItem><TbBrandJavascript /></GridItem>
                <GridItem><RiReactjsLine /></GridItem>
                <GridItem><BiGitMerge /></GridItem>
                <GridItem><TbBrandTypescript /></GridItem>
            </GridContainer>
        </Container>
    </WrapperContainer>
  )
}

export default SkillsSec