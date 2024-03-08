import style from './footer.module.css';

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>WichenUnsicher</div>
      <div className={style.text}>
        WichenUnsicher creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
