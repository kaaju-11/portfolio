import React from "react";
import {
  RoadMapContent,
  RoadMapContentHeading,
  RoadMapContentNumber,
  RoadMapContentParagraph,
  RoadMapDivImg,
  RoadMapEmptyDiv,
  RoadMapDiv,
  RoadMapGenticD1,
  RoadMapGenticD2,
  RoadMapHeadingH,
  RoadMapHeadingWrapper,
  RoadMapHeadingWrapperD1,
  RoadMapHeadingWrapperD2,
  RoadMapHeadingWrapperD3,
  RoadMapParagraphWrapper,
  RoadMapStyle,
  RoadMapEleR,
  RoadMapEleL,
  RoadMapContentEleR,
  RoadMapImageR,
  RoadMapImageL,
} from "style/Contact/index";

import Img1 from "assets/images/sparkle.avif";
import Img2 from "assets/images/sparkle.avif";
import Img3 from "assets/images/sparkle.avif";
import Img4 from "assets/images/sparkle.avif";
import Img5 from "assets/images/sparkle.avif";
import Img6 from "assets/images/sparkle.avif";
import Img7 from "assets/images/sparkle.avif";
const Projects = () => {
  const ImgStyle = {
    width: "100%",
    "max-width": "300px",
    height: "150px",
    "border-radius": "12px",
  };

  return (
    <>
      <RoadMapStyle>
        <RoadMapHeadingWrapper>
          <RoadMapHeadingWrapperD1 />
          <RoadMapHeadingWrapperD2>
            <RoadMapHeadingH>PROJECTS</RoadMapHeadingH>
            <RoadMapParagraphWrapper>
              The oil is produced at the source using a robust and
              modernsolvent-free extraction system, designed in conjunction with
              Texarome's technology to obtain a high quality product.
            </RoadMapParagraphWrapper>
          </RoadMapHeadingWrapperD2>
          <RoadMapHeadingWrapperD3 />
        </RoadMapHeadingWrapper>

        <RoadMapDiv>
          <RoadMapGenticD1>
            <RoadMapDivImg>
              <img style={ImgStyle} src={Img1} alt="" />
            </RoadMapDivImg>
          </RoadMapGenticD1>
          <RoadMapGenticD2>
            <RoadMapContent>
              <RoadMapContentHeading>
                Blog Project (April2023-April2023 )
              </RoadMapContentHeading>
              <RoadMapContentNumber>01</RoadMapContentNumber>
              <RoadMapContentParagraph>
                This Blog Website is made with Front-end and Back-end. In this
                website, proper authentication is used. In the front-end, I have
                used React, Redux with TypeScript using different react
                libraries. In the back-end, I have used Nodejs and Express. For
                Database, I used MongoDB which is no-sql database.
              </RoadMapContentParagraph>
            </RoadMapContent>
          </RoadMapGenticD2>
          <RoadMapEmptyDiv />
        </RoadMapDiv>

        {/* Div 2 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv />
          <RoadMapEleR>
            <RoadMapContentEleR>
              <RoadMapContentHeading>
                Music Player Project (May2022-May2022 )
              </RoadMapContentHeading>
              <RoadMapContentNumber>02</RoadMapContentNumber>
              <RoadMapContentParagraph>
                This project was to develop the user interface of an online
                music player. This project was developed using HTML,CSS and
                JavaScript. To make the project responsive flex and media query
                were used.
              </RoadMapContentParagraph>
            </RoadMapContentEleR>
          </RoadMapEleR>
          <RoadMapEmptyDiv>
            <RoadMapImageR>
              <RoadMapDivImg>
                <img style={ImgStyle} src={Img2} alt="" />
              </RoadMapDivImg>
            </RoadMapImageR>
          </RoadMapEmptyDiv>
        </RoadMapDiv>

        {/* Div 3 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv>
            <RoadMapImageL>
              <RoadMapDivImg>
                <img style={ImgStyle} src={Img3} alt="" />
              </RoadMapDivImg>
            </RoadMapImageL>
          </RoadMapEmptyDiv>
          <RoadMapEleL>
            <RoadMapContent>
              <RoadMapContentHeading>Processing</RoadMapContentHeading>
              <RoadMapContentNumber>03</RoadMapContentNumber>
              <RoadMapContentParagraph>
                The oil is produced at the source using a robust and modern
                solvent-free extraction system, designed in conjunction with
                Texarome's technology to obtain a high quality product.
              </RoadMapContentParagraph>
            </RoadMapContent>
          </RoadMapEleL>
          <RoadMapEmptyDiv />
        </RoadMapDiv>

        {/* Div 4 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv />
          <RoadMapEleR style={{ transform: " translate(48px, 8px)" }}>
            <RoadMapContentEleR>
              <RoadMapContentHeading>Rectification</RoadMapContentHeading>
              <RoadMapContentNumber>04</RoadMapContentNumber>
              <RoadMapContentParagraph>
                Low temperature molecular rectification preserves the fragile
                floral compounds specific to each varietal in order to remain
                true to the authentic aroma profile of the fresh flower.
              </RoadMapContentParagraph>
            </RoadMapContentEleR>
          </RoadMapEleR>
          <RoadMapEmptyDiv>
            <RoadMapImageR>
              <RoadMapDivImg>
                <img style={ImgStyle} src={Img4} alt="" />
              </RoadMapDivImg>
            </RoadMapImageR>
          </RoadMapEmptyDiv>
        </RoadMapDiv>

        {/* Div 5 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv>
            <RoadMapImageL>
              <RoadMapDivImg>
                <img style={ImgStyle} src={Img5} alt="" />
              </RoadMapDivImg>
            </RoadMapImageL>
          </RoadMapEmptyDiv>
          <RoadMapEleL style={{ transform: " translate(10px, 4px)" }}>
            <RoadMapContent>
              <RoadMapContentHeading>R & D </RoadMapContentHeading>
              <RoadMapContentNumber>05</RoadMapContentNumber>
              <RoadMapContentParagraph>
                At the forefront of R&D, our PHD chemists and engineers use
                GC-MS, HPLC, headspace, and preparative chromatography in our QC
                lab to guide the farming, production, and product development
                processes.
              </RoadMapContentParagraph>
            </RoadMapContent>
          </RoadMapEleL>
          <RoadMapEmptyDiv />
        </RoadMapDiv>

        {/* Div 6 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv />
          <RoadMapEleR style={{ transform: " translate(40px, 1px)" }}>
            <RoadMapContentEleR>
              <RoadMapContentHeading>Regulatory</RoadMapContentHeading>
              <RoadMapContentNumber>06</RoadMapContentNumber>
              <RoadMapContentParagraph>
                The in-house legal team with more than x years of experience,
                guides the regulatory department while also employing 3rd-party
                oversight to guarantee the absence of pesticide, heavy metal,
                residual solvent, and other regulated contaminants.
              </RoadMapContentParagraph>
            </RoadMapContentEleR>
          </RoadMapEleR>
          <RoadMapEmptyDiv>
            <RoadMapImageR>
              <RoadMapDivImg>
                <img style={ImgStyle} src={Img6} alt="" />
              </RoadMapDivImg>
            </RoadMapImageR>
          </RoadMapEmptyDiv>
        </RoadMapDiv>

        {/* Div 7 */}

        <RoadMapDiv>
          <RoadMapEmptyDiv>
            <RoadMapImageL>
              <RoadMapDivImg>
                <img style={ImgStyle} src={Img7} alt="" />
              </RoadMapDivImg>
            </RoadMapImageL>
          </RoadMapEmptyDiv>
          <RoadMapEleL
            style={{
              transform: "translate(0px,-2px)",
              borderRadius: "30px 0px 0px 0px",
              height: "20vw",
              borderBottom: "none",
            }}
          >
            <RoadMapContent>
              <RoadMapContentHeading>Quality Assurance</RoadMapContentHeading>
              <RoadMapContentNumber>07</RoadMapContentNumber>
              <RoadMapContentParagraph>
                The products are contained in a refrigerated vault and can be
                traced down to the farm level by batch and specific rows and
                plots, according to the certified ISO 9000 protocol.
              </RoadMapContentParagraph>
            </RoadMapContent>
          </RoadMapEleL>
          <RoadMapEmptyDiv />
        </RoadMapDiv>
      </RoadMapStyle>
    </>
  );
};

export default Projects;
