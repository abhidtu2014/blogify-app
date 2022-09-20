import { useRouter } from 'next/router';
import { FC, useCallback } from 'react';

import { Navbar } from 'flowbite-react';

interface HeaderProps {
  showLoginButton?: boolean;
}
export const Header: FC<HeaderProps> = ({ showLoginButton = true }): JSX.Element => {
  const router = useRouter();
  const handleLogin = useCallback((route: string) => {
    router.push(route);
  }, []);
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="#" onClick={() => handleLogin('/')}>
        <img src="/blogify-logo.png" className="mr-3 h-6 sm:h-9 rounded-full" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Blogify
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {showLoginButton && (
          <Navbar.Link href="#" active={true} onClick={() => handleLogin('/login')}>
            Log in
          </Navbar.Link>
        )}
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
