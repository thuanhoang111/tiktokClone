import { useEffect, useState, useRef } from 'react';
import * as videoService from '~/services/videoService';
import VideoItem from '~/components/VideoItem';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import { InView } from 'react-intersection-observer';
// import { InView } from 'react-intersection-observer';

const cx = classNames.bind(style);
const INIT_PAGE = 1;
const INIT_TYPE = 'for-you';

function Home() {
   const homeRef = useRef();
   const [loadMore, setLoadMore] = useState(false);
   const handleRandomNumber = (to) => {
      return Math.floor(Math.random() * to);
   };
   const [listVideo, setListVideo] = useState([]);
   const [page, setPage] = useState(handleRandomNumber(16));
   const [type, setType] = useState(INIT_TYPE);
   const fetchApi = async () => {
      await videoService
         .searchVideo({ type, page })
         .then((data) => {
            setListVideo((prevVideo) => [...prevVideo, ...data]);
         })
         .catch((error) => console.log(error));
   };
   useEffect(() => {
      fetchApi();
   }, []);

   useEffect(() => {
      if (loadMore) {
         setPage(handleRandomNumber(16));
         fetchApi();
      }
   }, [loadMore, type]);
   console.log(page);
   console.log(listVideo);
   console.log(loadMore);

   return (
      <div className={cx('wrapper')} id="home-screen" ref={homeRef}>
         {listVideo.map((video, index) => {
            // const result =
            if (listVideo.length - 1 == index) {
               return (
                  <InView onChange={setLoadMore} threshold={0.5} triggerOnce={true} key={index}>
                     <VideoItem data={video} key={index} />
                  </InView>
               );
            } else {
               return <VideoItem data={video} key={index} />;
            }
         })}
      </div>
   );
}

export default Home;
