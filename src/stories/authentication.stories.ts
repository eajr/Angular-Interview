import { storiesOf } from '@storybook/angular';
import { LoginComponent } from '../app/authentication/login/login.component';

storiesOf('Authentication/Login', module)
  .add(
    'base', () => ({
      component: LoginComponent
    }));
