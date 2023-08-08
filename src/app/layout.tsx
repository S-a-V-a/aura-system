import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { ThemeProvider } from '../theme';
import StyledComponentsRegistry from '../theme/registry';
import PageLayout from '../layouts/PageLayouts';

const dMSans = DM_Sans({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={dMSans.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <PageLayout>{children}</PageLayout>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
