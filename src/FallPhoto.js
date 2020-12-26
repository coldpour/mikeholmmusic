/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import fallDrums from "./fall drums.png";

const FallPhoto = (props) => {
  return (
    <img
      src={fallDrums}
      alt="mike at the kit in front of fall color trees"
      css={css`
        width: 100%;
      `}
      {...props}
    />
  );
};

export default FallPhoto;
