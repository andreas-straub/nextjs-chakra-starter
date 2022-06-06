import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "@/components/logo/Logo";
import { Link } from "@chakra-ui/layout";

export const Footer = () => (
  <Container as="footer" role="contentinfo" maxW="container.lg">
    <Stack
      spacing="6"
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      py={{ base: "8", md: "12" }}
    >
      <Stack spacing={{ base: "2", md: "4" }} align="start">
        <Logo w="7rem" />
        <Text fontSize="sm">Create beautiful websites remarkably fast.</Text>
      </Stack>
      <Stack
        direction={{ base: "column-reverse", md: "column", lg: "row" }}
        spacing={{ base: "10", md: "6" }}
      >
        <Stack direction="row" spacing="8">
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Kontakt
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Link
                variant="footerNav"
                href="https://evelan.de/projektanfrage"
                isExternal={true}
              >
                Contact
              </Link>
              <Button variant="link">Pricing</Button>
              <Button variant="link">Use Cases</Button>
            </Stack>
          </Stack>
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Legal
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Privacy</Button>
              <Button variant="link">Terms</Button>
              <Button variant="link">License</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Divider />
    <Stack
      pt="8"
      pb="12"
      justify="space-between"
      direction={{ base: "column-reverse", md: "row" }}
      align="center"
    >
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()} Evelan GmbH. All rights reserved.
      </Text>
      <ButtonGroup variant="ghost">
        <Link
          href="https://www.linkedin.com/company/evelan-gmbh"
          isExternal={true}
        >
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
        </Link>
        <Link href="https://github.com/andreas-straub" isExternal={true}>
          <IconButton
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
        </Link>
        <Link href="https://www.instagram.com/evelan.gmbh" isExternal={true}>
          <IconButton
            aria-label="Instagram"
            icon={<FaInstagram fontSize="1.25rem" />}
          />
        </Link>
        <Link href="https://www.facebook.com/evelan.gmbh" isExternal={true}>
          <IconButton
            aria-label="Facebook"
            icon={<FaFacebook fontSize="1.25rem" />}
          />
        </Link>
      </ButtonGroup>
    </Stack>
  </Container>
);
