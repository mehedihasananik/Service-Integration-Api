"use client";

import Container from "@/Components/Container/Container";
import { Button, Navbar } from "flowbite-react";

const AppHeader = () => {
  return (
    <Container>
      {" "}
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="/assets/footer.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link href="/app" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#experience">Experience</Navbar.Link>
          <Navbar.Link href="#apps">Apps</Navbar.Link>
          <Navbar.Link href="#services">Services</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default AppHeader;
