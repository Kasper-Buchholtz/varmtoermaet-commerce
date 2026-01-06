export const getMenuQuery = /* GraphQL */ `
  query getMenu($handle: String!) {
    menu(handle: $handle) {
      title
      items {
        title
        url
        type
        items {
          title
          url
          type
          items {
            title
            url
            type
            items {
              title
              url
              type
            }
          }
        }
      }
    }
  }
`;
