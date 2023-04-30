import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Name,
  Location,
  Tag,
  Avatar,
  Statistics,
  StatisticsItem,
  StatisticsLabel,
  StatisticsNumber,
} from './Profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={`${username} avatar`} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Statistics>
        <StatisticsItem>
          <StatisticsLabel>Followers</StatisticsLabel>
          <StatisticsNumber>{stats.followers}</StatisticsNumber>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsLabel>Views</StatisticsLabel>
          <StatisticsNumber>{stats.views}</StatisticsNumber>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsLabel>Likes</StatisticsLabel>
          <StatisticsNumber>{stats.likes}</StatisticsNumber>
        </StatisticsItem>
      </Statistics>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};