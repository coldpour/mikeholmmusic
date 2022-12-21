/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Root = styled.div`
  color: white;
  text-align: center;
  padding: 0 0 20px;
`;

// https://www.customink.com/fundraising/naked-charades?utm_campaign=desktop-post-launch-v3&utm_content=naked-charades&utm_medium=social&utm_source=copy-link

const AvatarSection = (props) => {
  return (
    <Root {...props}>
      <h1>Limited-Edition Merch</h1>
      <a href="https://www.customink.com/fundraising/naked-charades?utm_campaign=desktop-post-launch-v3&utm_content=naked-charades&utm_medium=social&utm_source=copy-link">
        <img
          css={css`
            width: 100%;
            height: auto;
            max-width: 490px;
          `}
          src="https://mms-images.out.customink.com/mms/images/catalog/colors/116200/views/alt/front_large_extended.png?design=egz0-00cp-get0&pblegacy=1&pblegacysize=big&digest=3341297967"
          alt="I want to play Naked Charades tonight shirt"
        />
      </a>
      <h2>You could WIN 3 FREE music lessons!</h2>
      <ol
        css={css`
          max-width: 420px;
          margin: auto;
          text-align: left;
        `}
      >
        <li>Buy a shirt</li>
        <li>Post a photo or video wearing your shirt to social media</li>
        <li>Tag me to be entered to win</li>
        <li>Drawing on Feb 1, 2023</li>
      </ol>

      <p>1 entry per platform! Post to TikTok and FB to double your odds!</p>
    </Root>
  );
};

export default AvatarSection;
