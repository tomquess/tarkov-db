import {gql} from 'apollo-angular'

const GET_ITEMS = gql`
query ($search: [String]){
    items(names: $search){
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