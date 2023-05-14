import throttle from 'lodash.throttle'; 
const form=document.querySelector('form');
const input=document.querySelector('input');
const textarea=document.querySelector('textarea');
const SAVE_FORM_STATE='feedback-form-state';

const formData={} ;

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input',throttle(onCreateObject, 500));

populateTextarea();

function populateTextarea(){ 
const savedMessage=
JSON.parse(localStorage.getItem(SAVE_FORM_STATE))|| {} ;  
    if(savedMessage){
        input.value=savedMessage.email || '';                                  
        textarea.value=savedMessage.message || ''}
}
function onCreateObject(evt){
    formData[evt.target.name]=evt.target.value;
    localStorage.setItem(SAVE_FORM_STATE, JSON.stringify(formData))
}

function onFormSubmit(evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(SAVE_FORM_STATE)  
    console.log(formData)
    return formData;
    }
