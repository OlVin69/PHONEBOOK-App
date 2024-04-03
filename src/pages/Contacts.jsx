import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../components/App/ContactForm/ContactForm';
import ContactList from '../components/App/ContactList/ContactList ';
import SearchBox from '../components/App/SearchBox/SearchBox';
import Loader from '../components/App/Loader/Loader';
import ErrorMessage from '../components/App/ErrorMessage/ErrorMessage'
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';
import { selectError } from '../redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
 
  useEffect(()=>{
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox />
      {error && <ErrorMessage/> }
      {isLoading && <Loader/>}
      <ContactList />
    </div>
  );
}