import styled from 'styled-components';

export const Wrapper = styled.div`
  .table-container {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
  }

  .users-form-container-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    .users-form-container {
      width: 500px;
      height: 600px;
      position: relative;
      left: calc(50% - 250px);
      top: calc(50% - 300px);
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;

      .users-form-data-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid var(--color-4);
        padding: 15px;
        border-radius: 10px;
      }

      .users-form-skills-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid var(--color-4);
        padding: 15px;
        border-radius: 10px;
        margin: 10px 0 10px 0;

        ul {
          padding: 0;
          li {
            list-style: none;
          }
        }
      }
    }
  }
`;
