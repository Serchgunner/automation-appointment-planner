describe('Doctors page', () => {
  beforeEach( async () => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
  })

it('check page title', async () => {
  await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
  })

it('Open modal window for adding a new doctor', async () => {
// click on doctors item in the side menu 
await $('[routerlink="/doctors"]').click();
//click on the add new doctor button
await $('body > app-root > app-main > div > main > app-doctors > div > div > div.specialization-types > button').click();
// check that a modal window is displayed 
await expect($('#dialog_757320498_0')).toBeDisplayed();
  });
  it('Add a new doctor', async ()=> {
    //click on doctors item in the side menu
    await $('[routerlink="/doctors"]').click();
    //click on the add new doctor button
    await $('body > app-root > app-main > div > main > app-doctors > div > div > div.specialization-types > button').click();
    //wait for visibility of modal window 
    await $('#dialog_757320498_0').waitForDisplayed();

    await $('[name="Name"]').setValue('John Doe');
    await $('#DoctorMobile').setValue('1111111111');
    await $('[name="Email"]').setValue('test@test.com');
    await $('[name="Education"]').setValue('Basic');
    await $('[name="Designation"]').setValue('Test');
    await $('#dialog_757320498_0 > div.e-footer-content > div > button.e-primary').click();

    await expect($('#dialog_757320498_0')).not.toBeDisplayed();

    await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Doe');
    await expect($('#Specialist_8').$('.education')).toHaveText('Basic', {ignoreCase: true});
  });
  it('Close modal window for adding a new doctor', async () => {
    
    await $('[routerlink="/doctors"]').click();
    await $('body > app-root > app-main > div > main > app-doctors > div > div > div.specialization-types > button').click();
    await $('#dialog_757320498_0').waitForDisplayed();
    await $('#dialog_757320498_0_dialog-header > button').click();
    await expect($('#dialog_757320498_0')).not.toBeDisplayed();


  })
})