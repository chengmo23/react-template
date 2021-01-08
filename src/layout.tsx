import styled from 'styled-components';

export const HEADER_HEIGHT = 100;
export const MIN_PRIMARY_COLUMN_WIDTH = 600;
export const MIN_SECONDARY_COLUMN_WIDTH = 320;
export const COL_GAP = 24;
export const NAVBAR_WIDTH = 72;

export const MEDIA_BREAK =
  MIN_PRIMARY_COLUMN_WIDTH +
  MIN_SECONDARY_COLUMN_WIDTH +
  COL_GAP +
  NAVBAR_WIDTH * 2;

export const MainView = styled.main.attrs({
    className: 'main-view'
})`
    display: grid;
    grid-area: main;
    height: 100%;
    max-height: 100vh;
    overflow: hidden;
    overflow-y: auto;

    @media (max-width: ${MEDIA_BREAK}px) {
        max-height: calc(100vh - ${HEADER_HEIGHT}px);
    }
`;

/*
┌──┬────────┬──┐
│  │   xx   │  │
│  │        │  │
│  │   xx   │  │
│  │        │  │
│  │   xx   │  │
└──┴────────┴──┘
*/

// reference spectrum/src/component/layout/index.js