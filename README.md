# Next.js App with [chakra-ui](https://github.com/chakra-ui/chakra-ui) and TypeScript

## Evelan test task

Please create a Next.js 12 project with a following page /users:

- The page should show a list of users
- The list has a pagination
- At the first view you should see the first 6 items
- The button: "Load more" should then append the next 6 items and so on
- If there are no more items to fetch the "Load more" button should be disabled
- The list of the users should be fetched from this API:  https://reqres.in/
- Please show following props of the user:
  - id
  - email
  - first_name
  - last_name
  - avatar (as an Avatar image)
  - TypeScript should be used as a language here
    - usage of any type is not allowed

The example API URL for the first page is: https://reqres.in/api/users?page=1

### Start development mode

```bash
npm run dev
```
