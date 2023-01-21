import {gql} from 'apollo-angular'

const GET_ITEMS = gql`
query {
    items {
        id
        name
        shortName
        wikiLink
        iconLink
        updated
        basePrice
        avg24hPrice
    }
  }
`

export {GET_ITEMS}