export class ListHeaderComponent {
  get rootEl(){
    return $('body > app-root > app-main > div > main > app-doctors > div > div > div.specialization-types');

  }
  get addNewDoctorBtn(){
    return this.rootEl.$('body > app-root > app-main > div > main > app-doctors > div > div > div.specialization-types > button')
     
  }
}