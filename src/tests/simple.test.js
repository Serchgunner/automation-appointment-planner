import {DashboardPage} from './../po/pages/dashboard.page';
import {DoctorsPage} from './../po/pages/doctors.page';


const dashboardPage = new DashboardPage();
const doctorspage = new DoctorsPage();

describe('Doctors page', () => {
  beforeEach( async () => {
    await dashboardPage.open();
  });

it('check page title', async () => {
  await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
  })

it('Open modal window for adding a new doctor', async () => {
// click on doctors item in the side menu 
await dashboardPage.sideMenu.item('doctors').click();
//click on the add new doctor button
await doctorspage.doctorListHeader.addNewDoctorBtn.click();
// check that a modal window is displayed 
await doctorspage.addDoctorModal.rootEl.waitForDisplayed();
  });

  it('Add a new doctor', async ()=> {
    //click on doctors item in the side menu
    await dashboardPage.sideMenu.item('doctors').click();
    //click on the add new doctor button
    await doctorspage.doctorListHeader.addNewDoctorBtn.click();
    //wait for visibility of modal window 
    await doctorspage.addDoctorModal.rootEl.waitForDisplayed();

    await $('[name="Name"]').setValue('John Doe');
    await $('#DoctorMobile').setValue('1111111111');
    await $('[name="Email"]').setValue('test@test.com');
    await $('[name="Education"]').setValue('Basic');
    await $('[name="Designation"]').setValue('Test');
    await $('#dialog_757320498_0 > div.e-footer-content > div > button.e-primary').click();

    await expect(doctorspage.addDoctorModal.rootEl).not.toBeDisplayed();

    await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Doe');
    await expect($('#Specialist_8').$('.education')).toHaveText('Basic', {ignoreCase: true});
  });
  it('Close modal window for adding a new doctor', async () => {
    
    await dashboardPage.sideMenu.item('doctors').click();
    await doctorspage.doctorListHeader.addNewDoctorBtn.click();
    await doctorspage.addDoctorModal.rootEl.waitForDisplayed();
    await $('#dialog_757320498_0_dialog-header > button').click();
    await expect(doctorspage.addDoctorModal.rootEl).not.toBeDisplayed();


  })
})