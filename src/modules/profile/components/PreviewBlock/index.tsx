import React from 'react';

import { IProfileData } from '../../store';
import userImg from '../../../../assets/images/user.png';

import styles from './PreviewBlock.module.scss';

interface IProps {
  profileData?: IProfileData
}

const PreviewBlock: React.FC<IProps> = ({ profileData }) => {
  return (
    <div className={styles['preview-block']}>
      <div className={styles['img-wrapper']}>
        <img className={styles.img} src={userImg} alt={profileData?.username} />
      </div>
      <div>{profileData?.username}</div>
    </div>
  )
};

export default PreviewBlock;
