import styles from './searchInput.module.css';
import { FaSearch } from 'react-icons/fa';
export const SearchInput = () => {
	return (
		<form className={styles.form}>
			
				<input
					className={styles.searchInput}
					type='search'
					name='q'
					id='mySearch'
					placeholder='Szukaj'
				/>
				<button className={styles.searchButton}>
					<FaSearch className={styles.searchIcon} />
				</button>
			
		</form>
	);
};
