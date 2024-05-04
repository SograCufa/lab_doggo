import styled, { css, keyframes } from 'styled-components'
import { CellStatus } from './types'

// Define el color violeta oscuro
const darkPurple = '#070208';

// Define el color violeta neón
const neonPurple = '#C62ED4';

const tickingAnimation = keyframes`
  0%, 50%, 100% {
    transform: scale(1);
    filter: brightness(1);
  }
  25% {
    transform: scale(0.95);
    filter: brightness(1.5);
  }
`

const goldReveal = keyframes`
  0% {
    filter: brightness(1);
    transform: scale(0.9);
  }
  100% {
    filter: brightness(2);
    transform: scale(1);
  }
`

const mineReveal = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    background: #ffffff;
    transform: scale(1);
  }
`

const hoverPulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`

export const Container2 = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  height: 100%;
`

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  user-select: none;
  backdrop-filter: blur(20px);
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 8px;
`

export const Levels = styled.div`
  border-radius: 5px;
  color: gray;
  background: #292a307d;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 50px;
`

export const Level = styled.div<{$active: boolean}>`
  margin: 0 auto;
  width: 25%;
  text-align: center;
  padding: 5px 0;
  opacity: .5;
  text-wrap: nowrap;

  & > div:first-child {
    font-size: 60%;
    color: gray;
  }

  ${(props) => props.$active && css`
    background: #FFFFFF11;
    background: 2px 0px 10px #00000033;
    color: #32cd5e;
    opacity: 1;
  `}
`

export const CellButton = styled.button<{status: CellStatus, selected: boolean}>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background: ${darkPurple};
  color: #fff;
  border: 2px solid transparent;
  border-radius: 4px;
  font-weight: bold;
  aspect-ratio: 1;
  width: 60px;
  transition: background 0.3s, opacity .3s, filter .2s ease;
  font-size: 12px;
  cursor: pointer;
  text-shadow: 0 0 10px ${neonPurple}, 0 0 20px ${neonPurple}, 0 0 30px ${neonPurple}, 0 0 40px ${neonPurple}, 0 0 70px ${neonPurple}, 0 0 80px ${neonPurple}, 0 0 100px ${neonPurple}, 0 0 150px ${neonPurple};

  ${(props) => props.selected && css`
    animation: ${tickingAnimation} .5s ease infinite;
    z-index: 10;
    opacity: 1!important;
  `}

  ${(props) => props.status === 'gold' && css`
    color: white;
    animation: ${goldReveal} .5s ease;
    opacity: 1;
  `}

  ${(props) => props.status === 'mine' && css`
    background: #FF0C0C;
    z-index: 10;
    animation: ${mineReveal} .3s ease;
    opacity: 1;
  `}

  ${(props) => props.status === 'hidden' && css`
    &:disabled {
      opacity: .5;
    }
  `}

  &:disabled {
    cursor: default;
  }

  &:hover:not(:disabled) {
    filter: brightness(1.5);
  }

  /* Agrega el borde de neón violeta */
  &:before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border: 2px solid ${neonPurple};
    border-radius: 6px;
    pointer-events: none;
    animation: ${hoverPulse} 2s linear infinite; /* Agrega animación de pulso */
  }
`

export const StatusBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  & > div:first-child {
    display: flex;
    color: #ffffffCC;
    gap: 20px;
  }
`
