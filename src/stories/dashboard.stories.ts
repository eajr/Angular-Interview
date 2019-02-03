import { storiesOf } from '@storybook/angular';
import { DashboardComponent } from '../app/dashboard/dashboard.component';

storiesOf('Dashboard/Home', module)
  .add(
    'base', () => ({
      component: DashboardComponent
    }));
