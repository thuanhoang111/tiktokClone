import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import { Link } from 'react-router-dom';
import Button from './../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function VideoItem() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('video-infor')}>
            <div className={cx('user-infor')}>
               <img
                  className={cx('user-avatar')}
                  src="https://firebasestorage.googleapis.com/v0/b/appchatzala.appspot.com/o/130512.jpg?alt=media&token=6adfbede-c8ab-4843-8e75-f3eb7530fb9d"
               />
               <div className={cx('user-infor-header')}>
                  <div className={cx('user-infor-header-name')}>
                     <p className={cx('nickname')}>ThuanHoang</p>
                     <p className={cx('name')}>Hoàng Hoa Thuấn</p>
                  </div>
                  <div className={cx('btn-following')}>
                     <Button outline small>
                        Follow
                     </Button>
                  </div>
                  <div className={cx('description')}>
                     <p>
                        Protect your Storage resources from abuse, such as billing fraud or phishing
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
                     </p>
                  </div>
                  <div className={cx('music-video-infor')}>
                     <FontAwesomeIcon icon={faMusic} />
                     <Link
                        to={'/music/nhạc-nền-Dâu-ở-Vũng-Tàu😌-7165098572105419547'}
                        className={cx('music-video-infor-name')}
                     >
                        nhạc nền - Dâu ở Vũng Tàu😌
                     </Link>
                  </div>
               </div>
            </div>
            <div className={cx('video-view')}>
               <video
                  className={cx('video-view-item')}
                  poster="https://files.fullstack.edu.vn/f8-tiktok/videos/840-63723a61b9375.jpg"
                  controls
               >
                  <source src="https://v16-webapp.tiktok.com/1133d91bf0f1944d496cde6a0723d819/63729fa9/video/tos/useast2a/tos-useast2a-pve-0037-aiso/1f67e91cfd9947e9af555bb37f704803/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2604&bt=1302&cs=0&ds=3&ft=kLO5qy-gZmo0PERcwBkVQppBDiHKJdmC0&mime_type=video_mp4&qs=0&rc=NzdmOGdmO2g6NjgzOmU5NkBpajY8Njs6ZjU0ZzMzZjgzM0AzMmEtLzRiXi8xMmMzNTU0YSMxZl9vcjRfcW1gLS1kL2Nzcw%3D%3D&l=2022111414055301024408708512254487&btag=80000"></source>
                  <source src="https://v16-webapp.tiktok.com/1133d91bf0f1944d496cde6a0723d819/63729fa9/video/tos/useast2a/tos-useast2a-pve-0037-aiso/1f67e91cfd9947e9af555bb37f704803/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2604&bt=1302&cs=0&ds=3&ft=kLO5qy-gZmo0PERcwBkVQppBDiHKJdmC0&mime_type=video_mp4&qs=0&rc=NzdmOGdmO2g6NjgzOmU5NkBpajY8Njs6ZjU0ZzMzZjgzM0AzMmEtLzRiXi8xMmMzNTU0YSMxZl9vcjRfcW1gLS1kL2Nzcw%3D%3D&l=2022111414055301024408708512254487&btag=80000"></source>
               </video>
            </div>
         </div>
      </div>
   );
}
export default VideoItem;
