/*
 * ComposerInstallPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import A from '../../components/A/index';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default class ComposerInstallPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Composer Installation Page</title>
          <meta name="description" content="Composer Installation steps page" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <p>
          To quickly install Composer in the current directory, run the following script in your terminal.
        </p>
        <List>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.listItemHeader1} />
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.listItemHeader2} />
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.listItemHeader3} />
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.listItemHeader4} />
            </ListItemTitle>
          </ListItem>
        </List>
        <br /><p>This installer script will simply check some php.ini settings, warn you if they are set incorrectly, and then download the latest composer.phar in the current directory. The 4 lines above will, in order:</p>
        <List>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.listItemHeader5} />
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.listItemHeader6} />
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.listItemHeader7} />
            </ListItemTitle>
          </ListItem>
          <ListItem>
            <ListItemTitle>
              <FormattedMessage {...messages.listItemHeader8} />
            </ListItemTitle>
          </ListItem>
        </List>
        <br />
        <p>Documentation Reference:&nbsp;&nbsp;
          <A href="https://getcomposer.org/download/" target="_blank">Composer Offical Site</A>
        </p>
      </div>
    );
  }
}
