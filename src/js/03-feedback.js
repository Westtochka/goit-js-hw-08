import throttle from 'lodash.throttle'; 
const form=document.querySelector('form');
const input=document.querySelector('input');
const textarea=document.querySelector('textarea');
const SAVE_FORM_STATE='feedback-form-state';
  const savedMessage=JSON.parse(localStorage.getItem('SAVE_FORM_STATE'))|| {}

formData=savedMessage;

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input',throttle(onCreateObject, 500));

populateTextarea()

function populateTextarea(){ 
    if(savedMessage.email){
        email.value=savedMessage.email}                                  
    if(savedMessage.message){
        textarea.value=savedMessage.message}
    };
function onCreateObject(evt){
    formData[evt.target.name]=evt.target.value;
    localStorage.setItem('LOCAL_STORAGE_KEY', JSON.stringify(formData))
}

function onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem('SAVE_FORM_STATE')  
    console.log(formData)
  return formData
    }