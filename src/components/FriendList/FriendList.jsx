import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListUl } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <FriendListUl>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        name={friend.name}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
      />
    ))}
  </FriendListUl>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};