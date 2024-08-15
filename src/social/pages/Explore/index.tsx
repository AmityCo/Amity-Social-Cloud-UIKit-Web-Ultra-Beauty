import React from 'react';

import RecommendedList from '~/social/components/community/RecommendedList';
import TrendingList from '~/social/components/community/TrendingList';
import CategoriesCard from '~/social/components/category/CategoriesCard';

import { PageContainer } from './styles';
import MobileNavbar from '../../../social/components/MobileNavbar';

interface ExploreProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const ExplorePage = ({ isOpen, toggleOpen }: ExploreProps) => (
  <div>
    <MobileNavbar isOpen={isOpen} toggleOpen={toggleOpen} titleId='sidebar.explore' />
    <PageContainer>
      <RecommendedList />
      <TrendingList />
      <CategoriesCard />
    </PageContainer>
  </div>

);

export default ExplorePage;
