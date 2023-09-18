const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");

tabs.addEventListener("click", (event)=>{
    const id = event.target.dataset.id;
    

    if(id) {
        btns.forEach((btn)=>{
            btn.classList.remove("live");
        });
        event.target.classList.add("live");

        articles.forEach((article)=>{
              article.classList.remove("live");
    });


    const element = document.getElementById(id);
    console.log(element, id)
    element.classList.add("live");
    };
});

// Trainer Name: Bharani 
// Start Date: 4th July 2023 Timing: 7:00AM to 9:00AM 
// Subject: Fireflink Batch Code: QCO-FFACAD-M2 
// Link to join: https://student.qspiders.com/classroom/QCO-FFACAD-M2


