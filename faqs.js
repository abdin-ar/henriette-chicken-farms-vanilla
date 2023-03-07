const faqs = [
  {
    id: 1,
    q: "question 1?",
    a: "Answer 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.",
  },
  {
    id: 2,
    q: "question 2?",
    a: "Answer 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.",
  },
  {
    id: 3,
    q: "question 3?",
    a: "Answer 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.",
  },
  {
    id: 4,
    q: "question 4?",
    a: "Answer 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.",
  },
  {
    id: 5,
    q: "question 5?",
    a: "Answer 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.",
  },
  {
    id: 6,
    q: "question 6?",
    a: "Answer 6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.",
  },
  {
    id: 7,
    q: "question 7?",
    a: "Answer 7 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.",
  },
  {
    id: 8,
    q: "question 8?",
    a: "Answer 8 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.",
  },
  {
    id: 9,
    q: "question 9?",
    a: "Answer 9 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.",
  },
  {
    id: 10,
    q: "question 10?",
    a: "Answer 10 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.",
  },
  {
    id: 11,
    q: "question 11?",
    a: "Answer 11 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.",
  },
  {
    id: 12,
    q: "question 12?",
    a: "Answer 12 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique.",
  },
];

const faqsContainer = document.getElementById("faqsContainer");
loadFaqs();

function loadFaqs() {
  let faqsHTML = "";
  for (let i = 0; i < faqs.length; i++) {
    faqsHTML += `<!-- single question -->
<section class="question" aria-label="Question ${faqs[i].id}">
<!-- question title -->
<div class="question-title">
<h2>${faqs[i].q}</h2>
<button type="button" class="question-btn" title="Show/hide the answer">
<span class="plus-icon">
<i class="far fa-plus-square"></i>
</span>
<span class="minus-icon">
<i class="far fa-minus-square"></i>
</span>
</button>
</div>
<div class="question-text">
<p>${faqs[i].a}</p>
</div>
</section>
<!-- end of single question -->`;
  }
  faqsContainer.innerHTML = faqsHTML;
  const questions = document.querySelectorAll(".question");

  questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function () {
      questions.forEach(function (item) {
        if (item !== question) {
          item.classList.remove("show-text");
        }
      });
      question.classList.toggle("show-text");
    });
  });
}

const searchForm = document.getElementById("searchForm");
const searchFaqsReset = document.getElementById("searchFaqsReset");
const searchFaqs = document.getElementById("searchFaqs");

searchFaqsReset.addEventListener("click", loadFaqs);

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (searchFaqs.value) {
    searchFaqsFunction(searchFaqs.value);
  } else {
    loadFaqs();
  }
});

function searchFaqsFunction(text) {
  const searchResultsArr = [];
  text = text.toLowerCase().split(" ");
  if (typeof text == "text") {
    text = [text];
  }
  for (let h = 0; h < text.length; h++) {
    for (let i = 0; i < faqs.length; i++) {
      if (!searchResultsArr.includes(i)) {
        if (
          faqs[i].q.toLowerCase().includes(text[h]) ||
          faqs[i].a.toLowerCase().includes(text[h])
        ) {
          searchResultsArr.push(i);
        }
      }
    }
  }
  loadSomeFaqs(searchResultsArr);
}

function loadSomeFaqs(arr) {
  let faqsHTML = "";
  if (arr.length == 0) {
    faqsContainer.innerHTML = `<p class="normal-text">No results! Please refine your search.</p>`;
  } else {
    for (let i = 0; i < faqs.length; i++) {
      if (arr.includes(i)) {
        faqsHTML += `<!-- single question -->
<section class="question" aria-label="Question ${faqs[i].id}">
<!-- question title -->
<div class="question-title">
<h2>${faqs[i].q}</h2>
<button type="button" class="question-btn" title="Show/hide the answer">
<span class="plus-icon">
<i class="far fa-plus-square"></i>
</span>
<span class="minus-icon">
<i class="far fa-minus-square"></i>
</span>
</button>
</div>
<div class="question-text">
<p>${faqs[i].a}</p>
</div>
</section>
<!-- end of single question -->`;
      }
    }
    faqsContainer.innerHTML = faqsHTML;
    const questions = document.querySelectorAll(".question");

    questions.forEach(function (question) {
      const btn = question.querySelector(".question-btn");
      btn.addEventListener("click", function () {
        questions.forEach(function (item) {
          if (item !== question) {
            item.classList.remove("show-text");
          }
        });
        question.classList.toggle("show-text");
      });
    });
  }
}
