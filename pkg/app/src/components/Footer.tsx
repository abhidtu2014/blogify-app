import { Footer as FooterComponent } from 'flowbite-react';
import { FC } from 'react';

export const Footer: FC = (): JSX.Element => {
  return (
    <FooterComponent container={true}>
      <FooterComponent.Copyright href="#" by="Blogify" year={2022} />
      <FooterComponent.LinkGroup>
        <FooterComponent.Link href="#">About</FooterComponent.Link>
        <FooterComponent.Link href="#">Privacy Policy</FooterComponent.Link>
        <FooterComponent.Link href="#">Licensing</FooterComponent.Link>
        <FooterComponent.Link href="#">Contact</FooterComponent.Link>
      </FooterComponent.LinkGroup>
    </FooterComponent>
  );
};
