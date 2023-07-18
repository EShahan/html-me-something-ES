window.addEventListener("load", event=> {
    const YeahOne = document.getElementById("YeahOne");
    const AbsolutelyOne = document.getElementById("AbsolutelyOne");
    const OuchOne = document.getElementById("OuchOne");
    const ResponseOne = document.getElementById("ResponseOne");
    const QuestionOne = document.getElementById("QuestionOne");
    function ResponseOneEvent() {
        var imgOne = document.createElement("img");
        imgOne.src = "./Images/MeTear.png";
        var srcOne = ResponseOne;
        srcOne.appendChild(imgOne);
        imgOne.style.height = "100px";
        imgOne.style.width = "100px";
        QuestionOne.remove();
    }
    YeahOne.addEventListener("click", ResponseOneEvent);
    AbsolutelyOne.addEventListener("click", ResponseOneEvent);
    OuchOne.addEventListener("click", ResponseOneEvent);

    const Puncture = document.getElementById("Puncture");
    const InnerFire = document.getElementById("Inner Fire");
    const DestructiveClench = document.getElementById("Destructive Clench");
    const ResponseTwo = document.getElementById("ResponseTwo");
    const QuestionTwo = document.getElementById("QuestionTwo");
    function ResponseTwoRight() {
        ResponseTwo.innerHTML = "Yep, Puncture is the only melee taunt!";
        QuestionTwo.remove();
    }
    function ResponseTwoWrong() {
        ResponseTwo.innerHTML = "No, Puncture is the only melee taunt!";
        QuestionTwo.remove();
    }
    Puncture.addEventListener("click", ResponseTwoRight);
    InnerFire.addEventListener("click", ResponseTwoWrong);
    DestructiveClench.addEventListener("click", ResponseTwoWrong);

    const Defense = document.getElementById("Defense");
    const Cool = document.getElementById("Cool");
    const Resources = document.getElementById("Resources");
    const ResponseThree = document.getElementById("ResponseThree");
    const QuestionThree = document.getElementById("QuestionThree");

    function ResponseThreeRight() {
        ResponseThree.innerHTML = "Yes, you'll have more defense!"
        QuestionThree.remove();
    }
    function ResponseThreeTech() {
        ResponseThree.innerHTML = "I mean. Yes, but I was looking for 'more defense!'"
        QuestionThree.remove();
    }
    function ResponseThreeWrong() {
        ResponseThree.innerHTML = "No, that's for mixed armor. 7 Heavy offers more defense, and the same HP."
        QuestionThree.remove();
    }
    Defense.addEventListener("click", ResponseThreeRight);
    Cool.addEventListener("click", ResponseThreeTech);
    Resources.addEventListener("click", ResponseThreeWrong);
    console.log("page is fully loaded");
});