import '../app/globals.css'
import AppFooter from '../components/footer/footer';

function FAQ() {
  return (
    <div>
      <div className="home-container flex text-black">
        <div className="flex-1"/>
        <div className="mt-10 mb-10 bg-white flex-1">
          <div className='mt-5 text-lg font-bold text-center'>Frequently Asked Questions</div>
          
        </div>
        <div className="flex-1"/>
      </div>
      <AppFooter/>
    </div>
  );
}

export default FAQ;