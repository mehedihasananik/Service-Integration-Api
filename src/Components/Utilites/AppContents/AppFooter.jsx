"use client";

import Container from "@/Components/Container/Container";
import { Footer } from "flowbite-react";

const AppFooter = () => {
  return (
    <Container>
      <Footer style={{ boxShadow: "none" }} container className="border-none">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="https://flowbite.com"
              src="/assets/footer.png"
              alt="Flowbite Logo"
            />
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Envobyte" year={2024} />
        </div>
      </Footer>
    </Container>
  );
};

export default AppFooter;
