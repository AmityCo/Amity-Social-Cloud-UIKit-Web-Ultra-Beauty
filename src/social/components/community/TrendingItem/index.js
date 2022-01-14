import React, { memo } from 'react';
import PropTypes from 'prop-types';
import useCommunity from '~/social/hooks/useCommunity';
import UITrendingItem from './UITrendingItem';

const TrendingItem = ({ communityId, onClick, loading }) => {
  const { community, file, communityCategories } = useCommunity(communityId);
  const { fileUrl } = file;

  const { membersCount, description } = community;

  const handleClick = () => onClick(communityId);

  return (
    <UITrendingItem
      avatarFileUrl={fileUrl}
      description={description}
      categories={communityCategories}
      membersCount={membersCount}
      isOfficial={community.isOfficial}
      isPublic={community.isPublic}
      name={community.displayName}
      loading={loading}
      onClick={handleClick}
    />
  );
};

TrendingItem.propTypes = {
  communityId: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

TrendingItem.defaultProps = {
  onClick: () => {},
  loading: false,
};

export { UITrendingItem };
export default memo(TrendingItem);
