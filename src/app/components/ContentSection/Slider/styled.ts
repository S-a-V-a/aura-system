import Typography from '@/src/components/Typography';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';

const SlidePlayProgressWrapper = styled('div')`
  position: absolute;

  bottom: 15px;
  left: 15px;

  color: #fff;
  min-width: 200px;

  z-index: 1;
`;

const Rect = styled(motion.rect)``;

const SlidePlayNumberWrapper = styled('div')`
  display: flex;
  gap: 24px;
`;

const SlidePlayNumber = styled(Typography)<{ isActive: boolean }>`
  color: ${({ theme }) => theme.colors.hex.base.white};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.4)};
`;

const Styled = { SlidePlayNumber, SlidePlayNumberWrapper, SlidePlayProgressWrapper, Rect };

export default Styled;
