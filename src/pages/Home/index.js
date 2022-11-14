import VideoItem from '~/components/VideoItem';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
const cx = classNames.bind(style);
function Home() {
   return (
      <div className={cx('wrapper')}>
         <VideoItem />
      </div>
   );

   //  <h2 style={{ height: '2000px' }}>Home page </h2>
}

export default Home;
