import React from 'react';
import style from './singlePost.module.css';
import Image from 'next/image';

const SinglePostPage = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image
          alt=''
          src='https://images.pexels.com/photos/18827668/pexels-photo-18827668/free-photo-of-daglar-alan-tarla-saha.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          fill
        />
      </div>
      <div className={style.textContainer}>
        <h2 className={style.title}>Title</h2>
        <div className={style.detail}>
          <Image
            src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className={style.avatar}
            width={50}
            height={50}
          />
          <div className={style.detailText}>
            <span className={style.detailTitle}>Author</span>
            <span className={style.detailValue}>Date</span>
          </div>
          <div className={style.detailText}>
            <span className={style.detailTitle}>Published</span>
            <span className={style.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={style.contents}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci hic
          ratione nesciunt quidem illo exercitationem a ipsam, facilis
          accusantium nisi odio unde maxime minima omnis. Natus nemo minus nisi
          perspiciatis?
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
