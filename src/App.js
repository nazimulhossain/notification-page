import { useState } from 'react';

const allNotification = [
  {
    name: 'Mark Webber',
    image: 'images/avatar-mark-webber.webp',
    comment: 'reacted to your recent post',
    group: 'My first tournament today!',
    time: '1m ago',
    read: false,
  },
  {
    name: 'Angela Gray',
    image: 'images/avatar-angela-gray.webp',
    comment: 'followed you',
    group: '',
    time: '5m ago',
    read: false,
  },
  {
    name: 'Jacob Thompson',
    image: 'images/avatar-jacob-thompson.webp',
    comment: 'has joined your group',
    group: 'Chess Club',
    time: '1 day ago',
    read: false,
  },
  {
    name: 'Rizky Hasanuddin',
    image: 'images/avatar-rizky-hasanuddin.webp',
    comment: 'sent you a private message',
    group: '',
    time: '5 days ago',
    read: true,
  },
  {
    name: 'Kimberly Smith',
    image: 'images/avatar-kimberly-smith.webp',
    comment: 'commented on your picture',
    group: '',
    time: '1 week ago',
    read: true,
  },
  {
    name: 'Nathan Peterson',
    image: 'images/avatar-nathan-peterson.webp',
    comment: 'reacted to your recent post ',
    group: '5 end-game strategies to increase your win rate',
    time: '2 weeks ago',
    read: true,
  },
  {
    name: 'Anna Kim',
    image: 'images/avatar-anna-kim.webp',
    comment: 'left the group ',
    group: 'Chess Club',
    time: '2 weeks ago',
    read: true,
  },
];

export default function App() {
  const [count, setCount] = useState(3);
  const [list, setList] = useState(allNotification);
  const handleCount = () => {
    setCount(0);
    setList((list) =>
      list.map((el) => {
        return { ...el, read: true };
      })
    );
  };
  return (
    <>
      <main className="app">
        <Menu count={count} handleCount={handleCount} />
        <NotificationsList list={list} />
      </main>
      <Footer />
    </>
  );
}

function Menu({ count, handleCount }) {
  return (
    <div className="menu">
      <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
        <h3 className="heading-tertiary">Notifications</h3>
        <span className="number">{count}</span>
      </div>

      <button className="allread" onClick={handleCount}>
        Mark all as read
      </button>
    </div>
  );
}

function NotificationsList({ list }) {
  return (
    <>
      {list.map((notification) => (
        <Notifications key={notification.name} notification={notification} />
      ))}
    </>
  );
}

function Notifications({ notification }) {
  return (
    <div className={`notifications ${!notification.read ? 'unread' : ''}`}>
      <img src={notification.image} alt={notification.name} />
      <div>
        <p className="comment">
          <strong className="title">{notification.name}</strong>{' '}
          {notification.comment}{' '}
          <strong
            className={
              notification.group === 'Chess Club' ? 'chess__club' : 'group'
            }
          >
            {notification.group}
          </strong>
          {!notification.read && <span className="dot"></span>}
        </p>
        <span className="time">{notification.time}</span>
        {notification.name === 'Rizky Hasanuddin' && (
          <p className="message">
            Hello, thanks for setting up the Chess Club. I've been a member for
            a few weeks now and I'm already having lots of fun and improving my
            game.
          </p>
        )}
      </div>
      {notification.name === 'Kimberly Smith' && (
        <img src="images/image-chess.webp" alt="chess" className="chess" />
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="attribution">
      Challenge by{' '}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/nazimulhossain">Nazimul Hossain</a>
      .
    </footer>
  );
}
