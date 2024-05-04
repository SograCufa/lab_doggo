import styled, { css, keyframes } from 'styled-components'
import { CellStatus } from './types'
import styled from 'styled-components';


// Define el color violeta oscuro
const darkPurple = '#070208';

// Define el color violeta neón
const neonPurple = '#C62ED4';


const tickingAnimation = keyframes`
  0%, 50%, 100% {
    transform: scale(1);
    filter: brightness(1);
    /* background: #764cc4; */
    /* box-shadow: 0 0 1px 1px #EF38FF; */
  }
  25% {
    transform: scale(0.95);
    filter: brightness(1.5);
    /* background: #945ef7; */
    /* box-shadow: 0 0 1px 1px #A226AD; */
  }
`

const goldReveal = keyframes`
  0% {
    filter: brightness(1);
    /* background: #ffffff; */
    transform: scale(1.1);
  }
  75% {
    filter: brightness(2);
    /* background: #3fff7a; */
    transform: scale(1.2);
  }
`

const mineReveal = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  51% {
    background: #ffffff;
    transform: scale(1.6);
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${darkPurple}; /* Cambia el color de fondo a púrpura oscuro */
  color: #fff; /* Cambia el color del texto a blanco */
  border: none;
  border-radius: 4px;
  font-weight: bold;
  aspect-ratio: 1;
  width: 60px;
  transition: background 0.3s, opacity .3s, filter .2s ease;
  font-size: 12px;
  cursor: pointer;
  overflow: hidden; /* Para ocultar cualquier contenido que se desborde */
  z-index: 0; /* Asegúrate de que el botón esté detrás del marco */
  &:before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: ${neonPurple}; /* Utiliza el color de neón para el fondo del marco */
    border-radius: 8px; /* Ajusta el radio del borde del marco */
    z-index: -1; /* Coloca el marco detrás del botón */
  }

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