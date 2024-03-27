import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList ';
import SearchBox from './SearchBox/SearchBox';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage'
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import { selectIsLoading } from '../../redux/contactsSlice';
import { selectError } from '../../redux/contactsSlice';

export default function App() {
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
