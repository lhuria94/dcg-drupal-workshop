/*
 * ComposerInstallPage Messages
 *
 * This contains all the text for the ComposerInstallPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'boilerplate.containers.ComposerInstallPage.header',
    defaultMessage: 'Composer Installation steps',
  },
  listItemHeader1: {
    id: 'boilerplate.containers.ComposerInstallPage.listItemHeader',
    defaultMessage: 'php -r "copy(\'https://getcomposer.org/installer\', \'composer-setup.php\');"',
  },
  listItemHeader2: {
    id: 'boilerplate.containers.ComposerInstallPage.listItemHeader2',
    defaultMessage: 'php -r "if (hash_file(\'SHA384\', \'composer-setup.php\') === \'544e09ee996cdf60ece3804abc52599c22b1f40f4323403c44d44fdfdd586475ca9813a858088ffbc1f233e9b180f061\') { echo \'Installer verified\'; } else { echo \'Installer corrupt\'; unlink(\'composer-setup.php\'); } echo PHP_EOL;"',
  },
  listItemHeader3: {
    id: 'boilerplate.containers.ComposerInstallPage.listItemHeader3',
    defaultMessage: 'php composer-setup.php',
  },
  listItemHeader4: {
    id: 'boilerplate.containers.ComposerInstallPage.listItemHeader4',
    defaultMessage: 'php -r "unlink(\'composer-setup.php\');"',
  },
  listItemHeader5: {
    id: 'boilerplate.containers.ComposerInstallPage.listItemHeader5',
    defaultMessage: 'Download the installer to the current directory',
  },
  listItemHeader6: {
    id: 'boilerplate.containers.ComposerInstallPage.listItemHeader6',
    defaultMessage: 'Verify the installer SHA-384',
  },
  listItemHeader7: {
    id: 'boilerplate.containers.ComposerInstallPage.listItemHeader7',
    defaultMessage: 'Run the installer',
  },
  listItemHeader8: {
    id: 'boilerplate.containers.ComposerInstallPage.listItemHeader8',
    defaultMessage: 'Remove the installer',
  },
});
