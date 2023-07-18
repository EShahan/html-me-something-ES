window.addEventListener("load", event=> {
    const YeahOne = document.getElementById("YeahOne");
    const AbsolutelyOne = document.getElementById("AbsolutelyOne");
    const OuchOne = document.getElementById("OuchOne");
    const ResponseOne = document.getElementById("ResponseOne");
    const QuestionOne = document.getElementById("QuestionOne");
    function ResponseOnePositiveEvent() {
        ResponseOne.innerHTML = "I liked it at one point, but I've done it so much I think I hate it now."
        QuestionOne.remove();
    }
    function ResponseOneQuestionEvent() {
        ResponseOne.innerHTML = "Why must you hurt me in this way."
        QuestionOne.remove();
    }
    YeahOne.addEventListener("click", ResponseOnePositiveEvent);
    AbsolutelyOne.addEventListener("click", ResponseOnePositiveEvent);
    OuchOne.addEventListener("click", ResponseOneQuestionEvent);
    console.log("page is fully loaded");
});