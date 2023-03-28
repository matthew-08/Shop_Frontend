import './global.css';
import { useQuery } from 'urql';
import { Text } from '@chakra-ui/react';
import { useFetchShopItemsQuery } from './generated/gql/graphql';

const TodosQuery = `
  query {
    allItems {
      itemId
      itemName
    }
  }
`;

function App() {
  const [result] = useFetchShopItemsQuery();

  const { data, fetching, error } = result;
  return (
    <div className="App">
      {fetching ? <Text>loading</Text> : <Text>fetched</Text>}
    </div>
  );
}

export default App;
