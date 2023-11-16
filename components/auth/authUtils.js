import auth from './firebase'; // Your Firebase setup

export const getCurrentUser = () => {
  console.log (auth)
  console.log ('here')
  return auth.currentUser;
};

export const signOut = async () => {
  try {
    await auth.signOut();
    // Optionally, add any post sign-out actions here
  } catch (error) {
    console.error('Error signing out:', error);
    // Handle any errors
  }
};