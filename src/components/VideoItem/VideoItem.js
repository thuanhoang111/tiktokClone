import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import { Link } from 'react-router-dom';
import Button from './../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faHeart,
   faMusic,
   faCommentDots,
   faReply,
   faPlay,
   faPause,
   faVolumeHigh,
   faVolumeMute,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, forwardRef } from 'react';
import { InView } from 'react-intersection-observer';
// import images from '~/assets/image';
import Image from '../Image';

const cx = classNames.bind(styles);
function VideoItem({ data }) {
   const user = data.user;
   const [like, setLike] = useState(false);
   const [inView, setInView] = useState(false);
   const [playVideo, setPlayVideo] = useState(true);
   const [volume, setVolume] = useState();
   const videoRef = useRef();
   const volumeRef = useRef();
   // const debouncedValue = useDebounce(volume, 500);

   // const handlePlayVideo = () =>{
   //    if (playVideo) {
   //       videoRef.current.play();
   //    } else {
   //       videoRef.current.pause();
   //    }
   // }
   const handleLike = () => {
      setLike(!like);
   };
   const className_liked = like ? 'reaction-icon-liked' : 'reaction-icon';
   if (videoRef.current) {
      if (inView && playVideo) {
         videoRef.current.play();
      } else {
         videoRef.current.pause();
      }
   }
   const handleChangeVolume = () => {
      // setVolume(volumeRef.current.value);
      // console.log(videoRef.current.volume);
      videoRef.current.volume = volumeRef.current.value / 100;
      setVolume(videoRef.current.volume);
   };
   return (
      <div className={cx('wrapper')}>
         <div className={cx('video-infor')}>
            <div className={cx('user-infor')}>
               {/* <img className={cx('user-avatar')} src={user.avatar ? user.avatar : images.noImage} /> */}
               <Image className={cx('user-avatar')} src={user.avatar} />
               <div className={cx('user-infor-header')}>
                  <div className={cx('user-infor-header-name')}>
                     <p className={cx('nickname')}>{user.nickname}</p>
                     <p className={cx('name')}>{user.first_name + ' ' + user.last_name}</p>
                  </div>
                  <div className={cx('btn-following')}>
                     <Button outline small>
                        Follow
                     </Button>
                  </div>
                  <div className={cx('description')}>
                     <div>
                        <p>{data.description}</p>
                        <div className={cx('hashtag')}>
                           <Link to={'/tag/' + 'foryou'} className={cx('hashtagItem')}>
                              <p>#foryou</p>
                           </Link>
                           <Link to={'/tag/' + 'hot'} className={cx('hashtagItem')}>
                              <p>#hot</p>
                           </Link>
                           <Link to={'/tag/' + 'youfollowing'} className={cx('hashtagItem')}>
                              <p>#youfollowing</p>
                           </Link>
                        </div>
                     </div>
                  </div>
                  {data.music && (
                     <div className={cx('music-video-infor')}>
                        <FontAwesomeIcon icon={faMusic} />
                        <Link
                           to={'/music/nhạc-nền-Dâu-ở-Vũng-Tàu😌-7165098572105419547'}
                           className={cx('music-video-infor-name')}
                        >
                           {data.music}
                        </Link>
                     </div>
                  )}
               </div>
            </div>
            <InView onChange={setInView} threshold={[0.5]}>
               <div className={cx('video-view')}>
                  <video className={cx('video-view-item')} loop={true} poster={data.thumb_url} ref={videoRef}>
                     <source src={data.file_url}></source>
                  </video>
                  <div className={cx('video-btn')}>
                     <div className={cx('btn-play-video')} onClick={() => setPlayVideo(!playVideo)}>
                        {playVideo ? (
                           <FontAwesomeIcon icon={faPlay} viewBox="0 0 350 350" />
                        ) : (
                           <FontAwesomeIcon icon={faPause} viewBox="0 0  350 350" />
                        )}
                     </div>
                     <div className={cx('btn-volume-video')}>
                        {volume == 0 ? (
                           <FontAwesomeIcon icon={faVolumeMute} viewBox="0 0  400 400" />
                        ) : (
                           <FontAwesomeIcon icon={faVolumeHigh} viewBox="0 0  400 400" />
                        )}
                        <div className={cx('video-control')}>
                           <input
                              type="range"
                              id="vol"
                              name="video-control"
                              min="0"
                              max="100"
                              // value={50}
                              ref={volumeRef}
                              onChange={() => {
                                 handleChangeVolume();
                              }}
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </InView>
            <div className={cx('reaction-video')}>
               <div className={cx('reaction-video-item')}>
                  <span className={cx(`${className_liked}`)} id="like-video" onClick={handleLike}>
                     <FontAwesomeIcon icon={faHeart} viewBox="100 -150 300 300" />
                  </span>
                  <strong className={cx('reaction-text')}>{data.likes_count}</strong>
               </div>
               <div className={cx('reaction-video-item')}>
                  <span className={cx('reaction-icon')}>
                     <FontAwesomeIcon icon={faCommentDots} viewBox="100 -150 300 300" />
                  </span>
                  <strong className={cx('reaction-text')}>{data.comments_count}</strong>
               </div>
               <div className={cx('reaction-video-item')}>
                  <span className={cx('reaction-icon')}>
                     <FontAwesomeIcon icon={faReply} viewBox="100 -150 300 300" />
                  </span>
                  {/* <strong className={cx('reaction-text')}>29</strong> */}
               </div>
            </div>
         </div>
      </div>
   );
}
export default VideoItem;
