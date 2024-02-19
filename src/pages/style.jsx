import styled from "styled-components";

export const DevLinksWrapper = styled.div`
     width: 100dvw;
     min-height: 100dvh;
     background-color: #171717;
     display: flex;
     flex-direction: column;
     align-items: center;
     padding-top: 50px;
     position: relative;
     gap: 40px;

     #title {
          color: white;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
          font-size: 20px;
     }

     img {
          width: 125px;
          height: 125px;
          object-fit: cover;
          border-radius: 50%;
          border: 1px solid #2b3039;
     }

     main {
          width: clamp(230px, 75%, 550px);
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;

          div {
               border: 1px solid #323232;
               text-align: center;
               width: 100%;
               height: 50px;
               border-radius: 4px;
               display: flex;
               align-items: center;
               justify-content: center;
               background: transparent;
               position: relative;
               overflow: hidden;
               
               * {
                    transition: .2s;
               }

               a {
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    padding: 13px 0;
                    text-decoration: none;
                    font-size: 18px;
                    width: 100%;
                    height: 50px;
                    background: #212121;
                    color: white;
               }

               span {
                    position: absolute;
                    right: -200%;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 23px;
               }

               &:hover {
                    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% );
                    
                    a {
                         width: 99%;
                         height: 42px;
                         padding: 9px 0;
                    }

                    span {
                         right: 20px;
                    }
               }
          }
     }

     footer {
          width: 100%;
          height: 80px;
          border-top: 1px solid #21262d;
          position: absolute;
          bottom: 0;
          color: #f9f6ee;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
     }
`;
