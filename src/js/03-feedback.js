import localStorageService from './localstorage';
import throttle from 'lodash.throttle';
// console.log(localStorageService);
//variant 1
const { save, load, remove } = localStorageService;


const feedbackForm = document.querySelector('.feedback-form');
const userFeedbackForm = {}

function fillFeedbackFormField() {
    // const userFieldsFromLS = JSON.parse(localStorage.getItem("feedback-form-state"));
    const userFieldsFromLS = load("feedback-form-state");
    // console.log(userFieldsFromLS);

    if (userFieldsFromLS === undefined) {
        return;
    };

    for (const input in userFieldsFromLS) {
        feedbackForm.elements[input].value = userFieldsFromLS[input];
    };
}
fillFeedbackFormField();

feedbackForm.addEventListener('input', throttle(onContactFormField, 500));

function onContactFormField(event) {
    const { target } = event;
    const inputValue = target.value;
    const fieldName = target.name;

    userFeedbackForm[fieldName] = inputValue;
    // console.log(userFeedbackForm);

    save("feedback-form-state", userFeedbackForm);
}

feedbackForm.addEventListener('submit', onContactFormSubmit);

function onContactFormSubmit(event) {
    event.preventDefault();
    console.log(userFeedbackForm);

    feedbackForm.reset();
    remove("feedback-form-state");
};

//variant 2
// const feedbackForm = document.querySelector('.feedback-form');

// const userFeedbackForm = {}

// function fillFeedbackFormField() {
//     try {
//         const userFieldsFromLS = JSON.parse(localStorage.getItem("feedback-form-state"));

//         if (userFieldsFromLS === null) {
//             return;
//         };
//         console.log(userFieldsFromLS);

//         for (const input in userFieldsFromLS) {
//             feedbackForm.elements[input].value = userFieldsFromLS[input];
//         };
//     } catch (error) {
//         console.log(error);
//     }
// }
// fillFeedbackFormField();

// feedbackForm.addEventListener('input', onContactFormField);

// function onContactFormField(event) {
//     const { target } = event;
//     const inputValue = target.value;
//     const fieldName = target.name;

//     userFeedbackForm[fieldName] = inputValue;
//     // console.log(userFeedbackForm);

//     localStorage.setItem("feedback-form-state", JSON.stringify(userFeedbackForm));
// }

// feedbackForm.addEventListener('submit', onContactFormSubmit);

// function onContactFormSubmit(event) {
//     event.preventDefault();
// console.log(userFeedbackForm);

//     feedbackForm.reset();
//     localStorage.removeItem("feedback-form-state");
// };