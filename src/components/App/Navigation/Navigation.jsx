import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import css from './Navigation.module.css';

export default function Navigation  ()  {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link className={css.link} to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link className={css.link} to="/contacts">
          Contacts
        </Link>
      )}
    </nav>
  );
}