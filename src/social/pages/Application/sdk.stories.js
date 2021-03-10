import React from 'react';
import { HashRouter as Router, Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';

import UserFeedPage from '~/social/pages/UserFeed';
import ProfileSettings from '~/social/components/ProfileSettings';
import NavigationProvider from '~/social/providers/NavigationProvider';
import UiKitApp from '.';

export default {
  title: 'SDK Connected/Social',
};

const SDKApp = props => {
  const history = useHistory();

  const { params = {} } =
    useRouteMatch('/user/:currentUserId') || useRouteMatch('/profile/:currentUserId') || {};
  const { currentUserId } = params;

  const onClickUser = userId => history.push(`/user/${userId}`);
  const onEditUser = userId => history.push(`/profile/${userId}`);

  return (
    <NavigationProvider onEditUser={onEditUser} onClickUser={onClickUser}>
      <Switch>
        <Route path="/" exact>
          <UiKitApp {...props} />
        </Route>

        <Route path="/user/:userId">
          <UserFeedPage userId={currentUserId} o />
        </Route>

        <Route path="/profile/:userId">
          <ProfileSettings userId={currentUserId} />
        </Route>
      </Switch>
    </NavigationProvider>
  );
};

export const SDKCommunityApp = () => (
  <Router>
    <SDKApp />
  </Router>
);

SDKCommunityApp.storyName = 'Application';

SDKCommunityApp.args = {
  shouldHideExplore: false,
  showCreateCommunityButton: true,
};

SDKCommunityApp.argTypes = {
  shouldHideExplore: { control: { type: 'boolean' } },
  showCreateCommunityButton: { control: { type: 'boolean' } },
  onMemberClick: { action: 'onMemberClick()' },
};
