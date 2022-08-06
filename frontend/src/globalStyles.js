import styled, { createGlobalStyle, css } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    transition: var(--main-transition) !important ;
  }
  
  :root {

    
    --for-active-click: scale(.92);
    --main-transition: all .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --primary-color: #dc3545;
    --primary-text-color: white;
    --primary-hover-color: #b52a37;
    ${
      ({darkMode}) => {
        if(darkMode){
          return `

          --secendory-color: #2f343a;
          --secendory-text-color: white;
          --secendory-hover-color: #272c31;

          --main-bg-color: #212427;

          --object-bg-color: #343a40;

          `
        } else {
          return `


          --secendory-color: #dfe5ec;
          --secendory-text-color: black;
          --secendory-hover-color: #c5ccd4;
          --main-bg-color: #f2f6fb;
          --object-bg-color: #ffffff;

          `
        }
      }
    }
 
  }
  html {
      scroll-behavior: smooth;
  }
  body{
      background-color: var(--main-bg-color);
      color: var(--secendory-text-color);
  }

  
  a{
      text-decoration: none;
      color: var(--secendory-text-color);
  }
  
  @media only screen and (min-width: 768px){
      body{
          font-size: 16px;
      }
  }
  
  @media only screen and (min-width: 480px) and (max-width: 768px){
      body{
          font-size: 15px;
      }
  }
  
  @media only screen and (max-width: 479px) {
      body{
          font-size: 14px;
      }
  }

  /* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

  
`;
 
export default GlobalStyle;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  

  margin-left: ${({show, smallDevice}) => show && !smallDevice? '255px': '0px'};

  transition: var(--main-transition);

`

export const Wraper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`