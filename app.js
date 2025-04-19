const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");

    });
});

// const questions = document.querySelectorAll('.faq .question');

//   questions.forEach(question => {
//     question.addEventListener('click', () => {
//       const currentFaq = question.parentElement;

//       // Close all FAQs first
//       document.querySelectorAll('.faq').forEach(faq => {
//         if (faq !== currentFaq) {
//           faq.classList.remove('active');
//         }
//       });

//       // Toggle current FAQ
//       currentFaq.classList.toggle('active');
//     });
//   });