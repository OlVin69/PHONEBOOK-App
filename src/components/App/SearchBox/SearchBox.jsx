
import { useSelector, useDispatch } from 'react-redux';
import css from './SearchBox.module.css';
import {  selectNameFilter } from '../../../redux/filters/selectors';
import {changeFilter} from '../../../redux/filters/slice'


export default function SearchBox() {
  
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  
  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value))
  };

  return (
    <>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </>
  );
}
