import styled from 'styled-components';

export const FriendsItem = styled.li`
  height: 68px;
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 15px;
  cursor: pointer;
  background-color: #fff;
`;

export const Online = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ isOn }) => (isOn ? 'green' : 'red')};
`;

export const FriendName = styled.p`
  font-size: 22px;
  font-weight: 500;
`;
