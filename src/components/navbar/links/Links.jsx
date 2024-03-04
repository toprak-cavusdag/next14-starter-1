import style from './link.module.css';
import NavLink from './navLink/NavLink';

const Links = () => {
  const links = [
    {
      title: 'Homepage',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Blog',
      path: '/blog',
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className={style.links}>
      {links.map((link, index) => (
        <NavLink item={link} key={index} />
      ))}
      {session?.user ? (
        <>
          {session.user?.isAdmin && (
            <NavLink item={{ title: 'Admin', path: '/admin' }} />
          )}
          <form action={handleLogout}>
            <button className={style.logout}>Logout</button>
          </form>
        </>
      ) : (
        <NavLink item={{ title: 'Login', path: '/login' }} />
      )}
    </div>
  );
};

export default Links;
