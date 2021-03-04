import React from 'react';
import styled from 'styled-components';
import { ReactComponent as GitSvg } from './footer/git.svg';
import { ReactComponent as RSLogoSvg } from './footer/rs_school_js.svg';

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 -1px 0 0 rgb(0 0 0 / 8%);
  position: relative;
`;

const FooterLineContainer = styled.div`
  padding: 10px;
  min-height: 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  font: 13px Roboto;
  text-align: right;
  font-family: Verdana, sans-serif;
`;

const SchoolContainer = styled(AuthorContainer)`
  display: flex;
  font: 13px Roboto;
  text-align: right;
  font-family: Verdana, sans-serif;
`;

const AuthorWrapper = styled.div`
  padding: .5rem;

  & svg {
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
    transition: .3s;

    @media (max-width: 501px) and (min-width: 0) {
      display: none;
    }
  }

  @media (max-width: 560px) and (min-width: 0) {
    padding-right: 0;
  }
`;

const Author = styled.a`
  display: flex;
  align-items: center;
  line-height: 1;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 5px;
  transition: color .3s ease-out;

  &:hover {
    color: #46cdd6;
  }
`;

const Footer: React.FC = () => (
  <>
    <FooterWrapper>
      <FooterLineContainer>
        <AuthorContainer>
          <AuthorWrapper>
            <GitSvg />
          </AuthorWrapper>
          <AuthorWrapper>
            <Author href='https://github.com/funfordima'>
              Dima Litvinov
              </Author>
          </AuthorWrapper>
        </AuthorContainer>
        <SchoolContainer>
          <Author href='https://rs.school/js/'>
            <RSLogoSvg />
              RSClone by RS SCHOOL @&nbsp;2021
            </Author>
        </SchoolContainer>
      </FooterLineContainer>
    </FooterWrapper>
  </>
);

export default Footer;
