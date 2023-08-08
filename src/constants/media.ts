export const breakpoints = {
  sm: '767px',
  md: {
    min: '768px',
    max: '1132px',
  },
  xl: {
    min: '1133px',
    max: '1680px',
  },
};

export const devices = {
  sm: {
    max: `(max-width: ${breakpoints.sm})`,
  },
  md: {
    minmax: `(max-width: ${breakpoints.md.max}) and (min-width: ${breakpoints.md.min})`,
    min: `(min-width: ${breakpoints.md.min})`,
    max: `(max-width: ${breakpoints.md.max})`,
  },
  xl: {
    max: `(max-width: ${breakpoints.xl.max})`,
    min: `(max-width: ${breakpoints.xl.min})`,
    minmax: `(max-width: ${breakpoints.xl.max}) and (min-width: ${breakpoints.xl.min})`,
  },
};
