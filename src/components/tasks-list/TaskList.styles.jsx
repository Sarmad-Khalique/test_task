import styled from "styled-components";

export const TaskListContainer = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  margin-top: 5rem;

  & > div {
    height: 20vh;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    &::-webkit-scrollbar {
      /* WebKit */
      width: 0;
      height: 0;
    }
  }
`;
