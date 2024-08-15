import React from 'react';

import { PageTypes } from '~/social/constants';
import Feed from '~/social/components/Feed';

import { useNavigation } from '~/social/providers/NavigationProvider';

import { BarsIcon } from '~/icons';
import { useIntl } from 'react-intl';
import { CommunitySideMenuOverlay, HeadTitle, MobileContainer, StyledCommunitySideMenu } from './styles';


interface MobileNavProps {
  isOpen: boolean;
  toggleOpen: () => void;
  titleId?: string;
}

const MobileNavbar = ({ isOpen, toggleOpen, titleId = 'sidebar.community' }: MobileNavProps) => {
  const { formatMessage } = useIntl();

  return (
    <div>
      <CommunitySideMenuOverlay isOpen={isOpen} onClick={toggleOpen} />
      <StyledCommunitySideMenu isOpen={isOpen} />
      <MobileContainer>
        <BarsIcon onClick={toggleOpen} />
        <HeadTitle>{formatMessage({ id: titleId })}</HeadTitle>
      </MobileContainer>
    </div>
  );
};

export default MobileNavbar;
