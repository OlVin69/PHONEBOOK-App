import {useDispatch} from 'react-redux';
import css from './Contact.module.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { deleteContact } from '../../../redux/contactsOps';

export default function Contact({ data:{name, number, id} }) {

const dispatch = useDispatch();
const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.contactBox}>
      <div className={css.info}>
        <p className={css.text}>
          <FaUser />
          {name}
        </p>
        <p className={css.text}>
          <BsFillTelephoneFill />
          {number}
        </p>
      </div>

      <button
        className={css.button}
        onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
