import Image from 'next/image';
import style from './about.module.css';

const AboutPage = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h2 className={style.subTitle}>About Agency</h2>
        <h1 className={style.title}>
          We create digital ideas that are biggest, bolder, braver, and better
        </h1>
        <p className={style.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={style.boxes}>
          <div className={style.box}>
            <h1>10 k+</h1>
            <p>Year of experience</p>
          </div>
          <div className={style.box}>
            <h1>10 k+</h1>
            <p>Year of experience</p>
          </div>
          <div className={style.box}>
            <h1>10 k+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>

      <div className={style.imgContainer}>
        <Image src='/about.png' fill className={style.img} />
      </div>
    </div>
  );
};

export default AboutPage;
