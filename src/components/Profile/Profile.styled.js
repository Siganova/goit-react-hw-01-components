import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 320px;
  margin: 0 auto;
  text-align: center;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 5px 2px 5px 0px rgba(0,0,0,0.15);
`;

export const Description = styled.div`
  padding-top: 45px;
  padding-bottom: 35px;
`;

export const Name = styled.p`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 500;
`;

export const Location = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #a8a59d;
`;

export const Tag = styled(Location)`
  margin-bottom: 15px;
`;

export const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
`;

export const Statistics = styled.ul`
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-top: 1px solid #cccccc;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #FAD9F4;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  gap: 5px;
  padding: 15px 15px;
  &:not(:last-child) {
    border-right: 1px solid #cccccc;
  }
`;

export const StatisticsLabel = styled.span`
  color: #a8a59d;
`;

export const StatisticsNumber = styled.span`
  font-weight: 600;
`;