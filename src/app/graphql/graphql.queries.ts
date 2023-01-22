import {gql} from 'apollo-angular'

const GET_ITEMS = gql`
query ($searchText: [String]){
    items(names: $searchText){
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