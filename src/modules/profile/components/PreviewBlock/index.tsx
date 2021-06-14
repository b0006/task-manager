import React from 'react';

import { IProfileData } from '../../store';

import styles from './PreviewBlock.module.scss';

interface IProps {
  profileData?: IProfileData | null;
}

const PreviewBlock: React.FC<IProps> = ({ profileData }) => {
  return (
    <div className={styles['preview-block']}>
      <div className={styles['avatar-wrapper']}>
        <div className={styles['avatar-char']}>{profileData?.username.charAt(0)}</div>
      </div>
      <div>{profileData?.username}</div>
    </div>
  )
};

export default PreviewBlock;
