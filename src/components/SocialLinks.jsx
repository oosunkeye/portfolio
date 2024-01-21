import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { Blog } from "../data";
// Icons
import { Icon } from '@iconify/react';

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const {  html_url } = useSelector(selectData);
  
  return (
    <StyledSocialLinks>
      <a
        href={html_url}
        aria-label="Check out my GitHub profile."
        className="link-icons"
        target="_blank"
      >
        <Icon icon="icomoon-free:github" />
      </a>
       <a
        href="https://www.linkedin.com/in/oladapo-david-osunkeye-64298016b/"
        aria-label="Check out my LinkedIn profile."
        className="link-icons"
        target="_blank"
      >
        <Icon icon="icomoon-free:linkedin" />
      </a>
    
    </StyledSocialLinks>
  );
}
