import React from 'react'
import { RiHtml5Fill, RiReactjsLine } from 'react-icons/ri'
import { TbBrandCss3, TbBrandJavascript, TbBrandTypescript } from 'react-icons/tb'
import {BiGitMerge} from "react-icons/bi"
import {GiSkills} from "react-icons/gi"
import { Container, GridContainer, GridItem, Heading, WrapperContainer,SkilName } from 'style/skills'

const SkillsSec = () => {
  return (
    <WrapperContainer>
        <Container>
            <Heading><GiSkills />Skills</Heading>
            <GridContainer>
              <SkilName>
              <GridItem><RiHtml5Fill /></GridItem>
              <h3 style={{color:"white", marginRight:"12px", marginTop:"-15px"}}>Html</h3>
              </SkilName>
              <SkilName>
              <GridItem><TbBrandCss3 /></GridItem>
              <h3 style={{color:"white", marginRight:"10px", marginTop:"-15px"}}>Css</h3>
              </SkilName>
              <SkilName>
              <GridItem><TbBrandJavascript /></GridItem>
              <h3 style={{color:"white", marginRight:"8px", marginTop:"-15px"}}>JavaScript</h3>
              </SkilName>
              <SkilName>
              <GridItem><RiReactjsLine /></GridItem>
              <h3 style={{color:"white", marginRight:"12px", marginTop:"-15px"}}>React</h3>
              </SkilName>
              <SkilName>
              <GridItem><BiGitMerge /></GridItem>
              <h3 style={{color:"white", marginRight:"8px", marginTop:"-15px"}}>Git</h3>
              </SkilName>
              <SkilName>
                
              <GridItem><TbBrandTypescript /></GridItem>
              <h3 style={{color:"white", marginRight:"0px", marginTop:"-15px"}}>TypeScript</h3>
              </SkilName> 
                
            </GridContainer>
        </Container>
    </WrapperContainer>
  )
}

export default SkillsSec