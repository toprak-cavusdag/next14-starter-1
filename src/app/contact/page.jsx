import style from './contact.module.css';
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image src='/contact.png' fill alt='Image' />
      </div>
      <div className={style.formContainer}>
        <form action='' className={style.form}>
          <input type='text' placeholder='Name and Surname' />
          <input type='email' placeholder='Email Address' />
          <input type='tel' placeholder='Phone Number (Optional)' />
          <textarea cols={30} rows={10} placeholder='Message'></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
