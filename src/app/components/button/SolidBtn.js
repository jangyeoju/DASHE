'use client';
import * as React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { createTheme, Divider, Icon, ThemeProvider } from '@mui/material';
import styled from '@emotion/styled';
import theme from '../../../app/style/theme';

export default function SolidBtn({ text, link }) {
  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat',
    },
    palette: {
      primary: {
        main: '#EC34A3',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <SolidBtnBox variant="outlined" href={link}>
          {text}
        </SolidBtnBox>
      </ThemeProvider>
    </>
  );
}

const SolidBtnBox = styled(Button)`
  font-size: 2rem;
  padding: 1rem 3rem;
  border-radius: 4px;
  background-color: #000;
  @media ${() => theme.device.tablet} {
    font-size: 1.6rem;
  }
`;
