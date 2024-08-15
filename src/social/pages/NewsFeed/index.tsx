import React from 'react';

import { PageTypes } from '~/social/constants';
import Feed from '~/social/components/Feed';

import { useNavigation } from '~/social/providers/NavigationProvider';

import {
  CommunitySideMenuOverlay,
  HeadTitle,
  MobileContainer,
  StyledCommunitySideMenu,
  Wrapper,
} from './styles';
import { BarsIcon } from '~/icons';
import { useIntl } from 'react-intl';
import { StoryTab } from '~/social/components/StoryTab';
import MobileNavbar from '~/social/components/MobileNavbar';

interface NewsFeedProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const NewsFeed = ({ isOpen, toggleOpen }: NewsFeedProps) => {
  const { onChangePage } = useNavigation();
  const { formatMessage } = useIntl();

  return (
    <Wrapper data-qa-anchor="news-feed">
      <MobileNavbar isOpen={isOpen} toggleOpen={toggleOpen}/>
      <StoryTab type="globalFeed" />
      <Feed
        targetType={'globalFeed'}
        goToExplore={() => onChangePage(PageTypes.Explore)}
        showPostCreator
      />
    </Wrapper>
  );
};

export default NewsFeed;
