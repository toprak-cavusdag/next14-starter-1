import React from 'react';
import style from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/8755970/pexels-photo-8755970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            fill
            className={style.img}
          />
        </div>
        <span className={style.date}>01.01.2024</span>
      </div>
      <div className={style.bottom}>
        <h1 className={style.title}>Title</h1>
        <p className={style.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          numquam similique, mollitia officia nostrum sapiente libero dolorum
          nemo, rem, repellat quibusdam alias quam illum ea beatae. Nobis nam
          porro officia!
        </p>
        <Link href='/blog/post' className={style.link}>
          {' '}
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
