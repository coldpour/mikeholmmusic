/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import nc from "./nc.jpg";
import hofhood from "./hofhood.jpg";
import hofmug from "./hofmug.jpg";

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
          <a href="https://themikeholm.myshopify.com/products/naked-charades-organic-long-sleeve-baby-bodysuit">
            <div
              css={css`
                background-image: url("${nc}");
                height: 200px;
                width: 200px;
                background-size: cover;
              `}
            />
          </a>
          <a href="https://themikeholm.myshopify.com/products/premium-eco-hoodie">
            <div
              css={css`
                background-image: url("${hofhood}");
                height: 200px;
                width: 200px;
                background-size: cover;
              `}
            />
          </a>
          <a href="https://themikeholm.myshopify.com/products/black-glossy-mug-1">
            <div
              css={css`
                background-image: url("${hofmug}");
                height: 200px;
                width: 200px;
                background-size: cover;
              `}
            />
          </a>
        </Row>
        <Row
          css={css`
            margin-top: 2em;
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
            href="https://themikeholm.myshopify.com/collections/all"
          >
            Shop
          </a>
        </Row>
      </Constraint>
    </Root>
  );
};

export default MerchSection;
