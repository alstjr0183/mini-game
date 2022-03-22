import styled, { css } from 'styled-components';

const deviceSizes: { mobile: number; desktop: number } = {
  mobile: 1020,
  desktop: 1920,
};

const device: { mobile: string; desktop: string } = {
  mobile: `(max-width : ${deviceSizes.mobile}px)`,
  desktop: `(min-width : ${deviceSizes.mobile + 1}px)`,
};

const theme = { device };

export default theme;
