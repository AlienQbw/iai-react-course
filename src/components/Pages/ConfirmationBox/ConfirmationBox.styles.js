import styled from 'styled-components';

export const ConfirmationBoxWrapper = styled.div`
  .confirmation-box-container {
    position: absolute;
    background-color: rgba(69, 162, 158, 0.05);
    width: 100vw;
    height: 100vh;

    div {
      border-radius: 10px;
      width: 300px;
      height: 300px;
      background-color: black;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      left: calc(50% - 150px);
      top: calc(50% - 150px);
    }
  }
`;
