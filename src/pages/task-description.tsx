import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { Container } from "@/components/Container";
import { Main } from "@/components/Main";
import { DarkModeSwitch } from "@/components/DarkModeSwitch";
import { Heading, Link } from "@chakra-ui/layout";
import { Footer } from "@/components/Footer";

const Index = () => (
  <>
    <Container height="100vh">
      <Main mt={0}>
        <Heading fontSize="4xl">Task description</Heading>
        <Text color="text">
          Please create a page with the list of the users fetched from this API:{" "}
          <Link isExternal={true} href="https://reqres.in/">
            https://reqres.in/
          </Link>
        </Text>
        <Text color="text">
          The example API URL is:{" "}
          <code>https://reqres.in/api/users?page=1</code>
        </Text>
        <Text color="text">
          It's up to you how do you want to implement a user list UI. It could
          be a list of cards or a data table. Please show at least following
          fields of the user per item:
        </Text>
        <UnorderedList color="text" mt={0} display="block" spacing={undefined}>
          <ListItem>email</ListItem>
          <ListItem>first_name</ListItem>
          <ListItem>last_name</ListItem>
          <ListItem>avatar</ListItem>
        </UnorderedList>
      </Main>

      <DarkModeSwitch />
    </Container>
    <Footer />
  </>
);

export default Index;
