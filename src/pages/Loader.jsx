import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.png'
const Loader = () => {
  return (
   <div className='flex flex-col justify-center items-center h-screen w-full gap-36'>
      
      {/* 1. Logo at the top */}
      <img src={Logo} alt="Loading..." className='w-auto h-36' />

      {/* 2. Loader at the bottom */}
      <StyledWrapper>
        <div className="loader" />
      </StyledWrapper>
      
    </div>
  );
}

const StyledWrapper = styled.div`
  .loader {
   position: relative;
   width: 2.5em;
   height: 2.5em;
   transform: rotate(165deg);
  }

  .loader:before, .loader:after {
   content: "";
   position: absolute;
   top: 50%;
   left: 50%;
   display: block;
   width: 0.5em;
   height: 0.5em;
   border-radius: 0.25em;
   transform: translate(-50%, -50%);
  }

  .loader:before {
   animation: before8 2s infinite;
  }

  .loader:after {
   animation: after6 2s infinite;
  }

  @keyframes before8 {
   0% {
    width: 0.5em;
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
   }

   35% {
    width: 2.5em;
    box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
   }

   70% {
    width: 0.5em;
    box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
   }

   100% {
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
   }
  }

  @keyframes after6 {
   0% {
    height: 0.5em;
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
   }

   35% {
    height: 2.5em;
    box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
   }

   70% {
    height: 0.5em;
    box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
   }

   100% {
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
   }
  }

  .loader {
   position: absolute;
   top: calc(50% - 1.25em);
   left: calc(50% - 1.25em);
  }`;

export default Loader;
