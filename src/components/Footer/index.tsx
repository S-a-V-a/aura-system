'use client';

import { FC } from 'react';
import Styled from './styled';
import Typography from '../Typography';
import { benefits, products } from '@/src/constants/footer';
import Link from '../Link';

const Footer: FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Col>
          <Styled.Rows>
            <Typography size='lg'>Products</Typography>
            <Styled.LinksWrapper>
              {products.map((p, idx) => (
                <Link key={p.link + '-' + idx} href={p.link} variant='text' color='gray' size='sm'>
                  {p.title}
                </Link>
              ))}
            </Styled.LinksWrapper>
          </Styled.Rows>
          <Styled.Rows>
            <Typography size='lg'>How It Works</Typography>
          </Styled.Rows>
          <Styled.Rows>
            <Typography size='lg'>Blog</Typography>
          </Styled.Rows>
        </Styled.Col>
        <Styled.Col>
          <Styled.Rows>
            <Typography size='lg'>Benefits</Typography>
            <Styled.LinksWrapper>
              {benefits.map((p, idx) => (
                <Link key={p.link + '-' + idx} href={p.link} variant='text' color='gray' size='sm'>
                  {p.title}
                </Link>
              ))}
            </Styled.LinksWrapper>
          </Styled.Rows>
        </Styled.Col>
        <Styled.ContactsCol>
          <Styled.Rows>
            <Typography size='md'>Email:</Typography>
            <Typography color='primary' brightness={400}>
              customerservice@inneractive.com
            </Typography>
          </Styled.Rows>
          <Styled.Rows>
            <Typography size='md'>Phone:</Typography>
            <Typography color='gray'>Toll free - 888-692-8722</Typography>
            <Typography color='gray'>Local - +1 310-578-5810</Typography>
            <Typography color='gray'>Hours - M-F 9-5pm</Typography>
          </Styled.Rows>
          <Styled.Rows>
            <Typography size='md'>Address:</Typography>
            <Typography color='gray'>
              100 Wilshire Blvd. Suite 700, <br /> Santa Monica, CA 90401 USA
            </Typography>
          </Styled.Rows>
        </Styled.ContactsCol>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Footer;
