import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams, useHistory } from 'react-router-dom';

import Container from '../../modules/layout/components/Container';
import profileStore, { IProfileData } from '../../modules/profile/store';
import { useFetch } from '../../modules/common/hooks';
import PreviewBlock from '../../modules/profile/components/PreviewBlock';

interface IParams {
  username: string;
}

const ProfilePage: React.FC = observer(() => {
  const [userData, setUserData] = useState<IProfileData>();
  const [fetchUserData] = useFetch<IParams, IProfileData>('/api/user', 'GET');

  const history = useHistory();
  const params = useParams<IParams>();
  const { profileData } = profileStore;

  useEffect(() => {
    if (params.username !== profileData?.username) {
      const fetchData = async () => {
        const { error, response } = await fetchUserData({ username: params.username });

        if (!response) {
          history.push('/404');
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
  }, [fetchUserData, history, params.username, profileData]);

  return (
    <Container>
      <PreviewBlock profileData={userData} />
    </Container>
  )
});

export default ProfilePage;
