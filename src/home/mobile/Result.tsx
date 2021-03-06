import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import back from '../../assets/images/svg/back.svg';
import UserService from '../../service/UserService';
import ResultList from './component/ResultList';
import color from '../../common/color';

const Container = styled('div')({
  padding: '25px 18px 0px 20px',
  width: '100%',
  '& > h5': {
    color: color.white,
  },
});

const Back = styled('div')({
  position: 'fixed',
  width: '100%',
  zIndex: 2,
  backgroundColor: color.bgDark,
  top: 0,
  left: 0,
  paddingTop: 23,
  paddingLeft: 20,
  '& > h5': {
    display: 'flex',
    color: color.white,
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontSize: '24px',
    lineHeight: '150%',
    '& > img': {
      marginRight: 14,
    },
  },
});

const Title = styled(Typography)({
  marginTop: '70px',
  marginBottom: '22px',
  fontFamily: 'Ubuntu',
  fontStyle: 'normal',
  fontSize: '24px',
  lineHeight: '150%',
});

const Result = () => {
  const [users, setUsers] = useState<IuserData[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);

  const { keyword = '', page = 1, pageSize = 10 } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const res = await UserService.gerUserAllList({ keyword, page, pageSize });
      setHasNextPage(res.data.length === Number(pageSize));
      setUsers([...users, ...res.data]);
    };
    getData();
  }, [page]);

  const getMore = () => {
    const newPage = Number(page) + 1;
    if (keyword) {
      navigate(
        `/home/result/keyword/${keyword}/page/${newPage}/pageSize/${pageSize}`,
      );
    } else {
      navigate(`/home/result/page/${newPage}/pageSize/${pageSize}`);
    }
  };

  return (
    <Container>
      <Back>
        <Typography
          variant="h5"
          onClick={() => {
            navigate('/home');
          }}
        >
          <img src={back} alt="back" />
          Home Page
        </Typography>
      </Back>
      <Title variant="h5">Results</Title>
      <div
        style={{
          height: 'calc(100vh - 144px)',
          width: '100%',
        }}
      >
        {users.length > 0 && (
          <ResultList
            data={users}
            getMore={getMore}
            hasNextPage={hasNextPage}
          />
        )}
      </div>
    </Container>
  );
};
export default Result;
