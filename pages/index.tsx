import { useQuery, gql } from '@apollo/client';

import styles from '../styles/Home.module.css';
// Mam problem z dokończeniem konfiguracji codegena. Wszystko robiłem według docsów
// Korzystałem z tego: https://www.apollographql.com/docs/react/get-started/, a później chcąc dodać typescripta działałem według tego: https://www.apollographql.com/docs/react/development-testing/static-typing/. Wszystko szło dobrze do momentu użycia komendy npm run compile, która miała mi wygenerować typy według mojej konfiguracji. Wywala mi bład: "Invalid Codegen Configuration!  Please make sure that your codegen config file contains the "generates" field, with a specification for the plugins you need. "
// Najlepsze jest to, że posiadam to pole w moim pliku i na dodatek dodane są tam pluginy(te o które prosiłeś). Także nie wiem co robię nie tak ;)
export default function Home() {
	const GET_PRODUCTS = gql`
		query GetProducts {
			products {
				description
				name
				price

				images {
					fileName
					url
				}
			}
		}
	`;
	const { loading, error, data } = useQuery(GET_PRODUCTS);
	console.log(data);
	return (
    <ul>
      {data.products.map(item=>{
        return( 
          <li>{item.name}</li>
        )
      })}
    </ul>
  );
}
