import React, { useRef } from 'react';
import styles from './UserSearchResult.module.css';
import useIntersectionObserver from '~/v4/core/hooks/useIntersectionObserver';
import { useAmityComponent } from '~/v4/core/hooks/uikit';
import { UserSearchItem } from './UserSearchItem';
import { UserSearchItemSkeleton } from './UserSearchItemSkeleton';

interface UserSearchResultProps {
  pageId?: string;
  userCollection: Amity.User[];
  isLoading: boolean;
  onLoadMore: () => void;
}

export const UserSearchResult = ({
  pageId = '*',
  userCollection = [],
  isLoading,
  onLoadMore,
}: UserSearchResultProps) => {
  const componentId = 'user_search_result';
  const { accessibilityId, config, defaultConfig, isExcluded, uiReference, themeStyles } =
    useAmityComponent({
      pageId,
      componentId,
    });

  const intersectionRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver({ onIntersect: () => onLoadMore(), ref: intersectionRef });

  return (
    <div className={styles.userSearchResult} style={themeStyles}>
      {userCollection.map((user) => (
        <UserSearchItem key={user.userId} user={user} />
      ))}
      {isLoading
        ? Array.from({ length: 5 }).map((_, index) => (
            <UserSearchItemSkeleton key={index} pageId={pageId} componentId={componentId} />
          ))
        : null}
      <div ref={intersectionRef} />
    </div>
  );
};
