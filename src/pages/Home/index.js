import { useEffect, useState } from 'react';

import * as videoService from '~/services/videoService';
import VideoItem from '~/components/VideoItem';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
const cx = classNames.bind(style);
const INIT_PAGE = 2;
const INIT_TYPE = 'for-you';

function Home() {
   const [listVideo, setListVideo] = useState([]);
   const [page, setPage] = useState(INIT_PAGE);
   const [type, setType] = useState(INIT_TYPE);
   useEffect(() => {
      const fetchApi = async () => {
         await videoService
            .searchVideo({ type, page })
            .then((data) => {
               setListVideo((...prevVideo) => [...prevVideo[0], ...data]);
            })
            .catch((error) => console.log(error));
      };

      fetchApi();
   }, [page, type]);
   console.log(listVideo);
   return (
      <div className={cx('wrapper')}>
         {listVideo.map((video) => {
            return <VideoItem data={video} key={video.id} />;
         })}
      </div>
   );

   //  <h2 style={{ height: '2000px' }}>Home page </h2>
}

export default Home;
