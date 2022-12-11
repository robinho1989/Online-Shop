import { useQuery, gql } from '@apollo/client';

import styles from '../styles/Home.module.css';

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
