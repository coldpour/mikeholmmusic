/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import nc from "./nc.jpg";
import hof from "./hof.jpg";

const Root = styled.div`
  background: white;
  padding-top: 1em;
`;

const Constraint = styled.div`
  max-width: 438px;
  margin: auto;
  padding: 0 1em;

  @media (min-width: 600px) {
    padding: 0;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const Heading = styled.h2`
  text-transform: uppercase;
  font-size: 2em;
  font-style: italic;
  font-weight: 200;
  margin-bottom: 12px;
`;

const MerchSection = (props) => {
  return (
    <Root {...props}>
      <Constraint>
        <Heading>Merch</Heading>
        <Row>
          <a href="https://themikeholm.myspreadshop.com/naked+charades-A63e7612d99b27e588237bdc5?productType=401&sellable=nOLAvb9RzBcaJdglMd11-401-10">
            <div
              css={css`
                background-image: url("${nc}");
                height: 200px;
                width: 200px;
                background-size: cover;
              `}
            />
          </a>
          <a href="https://themikeholm.myspreadshop.com/heart+of+fire+brain+of+ice-A63e73e4fade0753b997a376c?productType=1592&sellable=bBlN8zy9O7SpZlRNzLGg-1592-27&appearance=2">
            <div
              css={css`
                background-image: url("${hof}");
                height: 200px;
                width: 200px;
                background-size: cover;
              `}
            />
          </a>
        </Row>
        <Row
          css={css`
            margin-top: 0.5em;
          `}
        >
          <a
            css={css`
              padding: 0 14px;
              display: flex;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              height: 42px;
              box-sizing: border-box;
              background: black;
              color: white;
            `}
            href="https://themikeholm.myspreadshop.com"
          >
            Shop
          </a>
        </Row>
      </Constraint>
    </Root>
  );
};

export default MerchSection;
