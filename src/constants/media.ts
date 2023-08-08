export const breakpoints = {
  sm: '767px',
  md: {
    min: '768px',
    max: '1132px',
  },
  xl: '1680px',
};

export const devices = {
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md.max}) and (min-width: ${breakpoints.md.min})`,
  xl: `(max-width: ${breakpoints.xl})`,
};
