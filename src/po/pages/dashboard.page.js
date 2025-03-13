import {SideMenuComponet} from './../components/common/sidemenu.component';

export class DashboardPage {
constructor() {
  this.sideMenu = new SideMenuComponet()
}

async open () {
  await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
  }
}
