/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { videoRates, travelRates } from "./rates";

const Root = styled.div`
  background: white;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0 50px;
`;

const Menu = styled.div`
  max-width: 600px;
  padding: 0 0.5em;
  @media (min-width: 600px) {
    padding: 0 1em;
  }
`;

const Table = styled.table`
  text-align: left;
  margin: auto;
  width: 100%;
`;

const Tr = styled.tr``;

const Td = styled.td`
  padding: 0.5em 0;
  @media (min-width: 600px) {
    padding: 1em 0;
  }
`;

const RateTitle = styled.div`
  font-weight: bold;
`;

const RateDescription = styled.div`
  font-size: 0.75em;
`;

const PriceCell = styled(Td)`
  vertical-align: top;
  text-align: right;
`;

const Price = RateTitle;
const PriceNote = styled(RateDescription)`
  white-space: nowrap;
`;

const TheText = styled.div`
  font-size: 12px;
  text-align: left;
`;

const MenuText = styled.span`
  font-size: 3em;
  text-transform: uppercase;
  line-height: 0.7;
`;

const MenuHeading = styled.h2`
  text-align: left;
  margin-top: 0;
`;
const HeadingBlock = styled.div`
  display: inline-block;
`;

const SubHeading = styled.h3`
  text-transform: uppercase;
  font-size: 2em;
  font-style: italic;
  font-weight: 200;
  margin-bottom: 12px;
`;

const RefundText = styled.span`
  text-transform: uppercase;
  font-style: italic;
  font-weight: bold;
`;

const ViewCount = styled.span`
  font-weight: bold;
`;

const MenuSection = (props) => {
  return (
    <Root {...props}>
      <Menu>
        <MenuHeading>
          <HeadingBlock>
            <TheText>The</TheText>
            <MenuText>Menu</MenuText>
          </HeadingBlock>
        </MenuHeading>
        <div>Send an idea for a video to my venmo</div>
        <div>
          <RefundText>Full refund</RefundText> if your idea gets{" "}
          <ViewCount>100</ViewCount> views
        </div>
        <SubHeading>video & tracking</SubHeading>
        <Table>
          {videoRates.map(([item, price, description]) => (
            <Tr key={item}>
              <Td>
                <RateTitle>{item}</RateTitle>
                <RateDescription>{description}</RateDescription>
              </Td>
              <PriceCell>
                <Price>${price}</Price>
              </PriceCell>
            </Tr>
          ))}
        </Table>
        <SubHeading>Live</SubHeading>
        <Table>
          {travelRates.map(([item, price, description]) => (
            <Tr key={item}>
              <Td>
                <RateTitle>{item}</RateTitle>
                <RateDescription>{description}</RateDescription>
              </Td>
              <PriceCell>
                <Price>${price}</Price>
                <PriceNote>+ travel</PriceNote>
              </PriceCell>
            </Tr>
          ))}
        </Table>
      </Menu>
    </Root>
  );
};

export default MenuSection;
