export class SideMenuComponet {
  get rootEL() {
    return $('#plannerSiderBar');
  }
  get name(){
    return this.rootEL.$(' .name');
  }
  item (param) {
    const selectors = {
      dashboard: '[routerlink="/dashboard"]',
      schedule: '[routerlink="/schedule"]',
      doctors: '[routerlink="/doctors"]'
    };
    return this.rootEL.$(selectors[param.toLowerCase()]);
  } 
}