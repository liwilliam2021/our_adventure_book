import '../app/globals.css'
import { getCurrentUser } from '../components/auth/authUtils';
import AppFooter from '../components/footer/footer';

function Book() {

  const user = getCurrentUser ();
  console.log(user)

  return (
    <div>
      <div>Hello</div>
      <AppFooter/>
    </div>
  );
}

export default Book;