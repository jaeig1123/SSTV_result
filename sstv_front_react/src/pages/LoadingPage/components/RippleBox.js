import styled from "styled-components";
import { Ripples } from "./Ripples";

export const RippleBox = styled(Ripples)`
  width: 800px;
  height: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px;
  fontSize: 40px;
  .ripple {
    background-color: rgb(78, 86, 105);
  }
`;
