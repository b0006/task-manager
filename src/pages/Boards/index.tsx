import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams, Redirect } from 'react-router-dom';

import Container from '../../modules/layout/components/Container';
import profileStore from '../../modules/profile/store';
import boardStore from '../../modules/boards/store';
import { useFetch } from '../../modules/common/hooks';
import { IBoardPreview } from '../../modules/boards/types';
import BoardPreviewList from '../../modules/boards/components/BoardPreviewList';

interface IParams {
  username: string;
}

const BoardsPage: React.FC = observer(() => {
  const params = useParams<IParams>();
  const { profileData } = profileStore;
  const { previewList, actionSetPreviewList } = boardStore;

  const isMine = params.username === profileData?.username;
  const [fetchBoardList] = useFetch<null, IBoardPreview[]>('/api/board', 'GET');

  useEffect(() => {
    if (isMine) {
      const fetchData = async () => {
        const { response, error } = await fetchBoardList();
        if (!error && response) {
          actionSetPreviewList(response);
        }
      }

      fetchData();
    }
  }, [actionSetPreviewList, fetchBoardList, isMine]);

  if (!isMine) {
    return <Redirect to={`/${profileData?.username}/`} />
  }

  return (
    <Container>
      <BoardPreviewList list={previewList} />
    </Container>
  );
});

export default BoardsPage;
