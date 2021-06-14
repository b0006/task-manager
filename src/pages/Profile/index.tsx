import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams, useHistory } from 'react-router-dom';

import Container from '../../modules/layout/components/Container';
import profileStore, { IProfileData } from '../../modules/profile/store';
import { useFetch } from '../../modules/common/hooks';
import Button from '../../modules/common/ui-kit/Button';
import PreviewBlock from '../../modules/profile/components/PreviewBlock';

interface IParams {
  username: string;
}

const ProfilePage: React.FC = observer(() => {
  const [userData, setUserData] = useState<IProfileData | null>(null);
  const [fetchUserData] = useFetch<IParams, IProfileData>('/api/profile', 'GET');

  const history = useHistory();
  const params = useParams<IParams>();
  const { profileData } = profileStore;

  const isMineProfile = params.username === profileData?.username;

  useEffect(() => {
    if (!isMineProfile) {
      const fetchData = async () => {
        const { error, response } = await fetchUserData({ username: params.username });

        if (!response) {
          history.replace('/404');
          return;
        }

        if (!error && response) {
          setUserData(response);
        }
      }

      fetchData();
    } else {
      setUserData(profileData);
    }
  }, [fetchUserData, history, isMineProfile, params.username, profileData]);

  return (
    <Container>
      <PreviewBlock profileData={userData} />
      {isMineProfile && profileData?.username && (
        <Button href={`/${profileData.username}/boards/`} text="Перейти к моим доскам" />
      )}
    </Container>
  )
});

export default ProfilePage;
