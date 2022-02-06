let plusElement = document.getElementById("plusSymbol");
let lessElement = document.getElementById("lessSymbol");

function plus() {
  let plusElement = document.getElementById("plusSymbol");
  let paragraphE1 = document.getElementById("paragraph");
  let lessElement = document.getElementById("lessSymbol");
  plusElement.classList.add("d-none");
  paragraphE1.textContent =
    " While Simple Programmer was originally created by founder John Sonmez to distill what he learned as a web developer into understandable content, today it is focused on helping software developers, programmers and other IT professionals improve their careers and their lives. This blog gets into the nitty-gritty of being a web developer and if you’ve wondered about something web development related, there’s a good chance they’ve written about it. Simple Programmer puts a fun spin on videos, keeping you engaged with humor while providing valuable content.  They’re constantly posting new articles – almost daily – so you’ll never be bored.  With new technologies flooding every day, it is hard to keep up with all the updates. Blogs are a valuable resource for keeping up with recent innovations, communicating with fellow developers and getting a feel of what software development is all about. Living in an era of content overload, it is hard to find the best developer blogs out there. Some blogs post updates every day and every hour, while others only reflect on major innovations. There is definitely a lot to choose from and each and every one of them is somehow different from the other. However, it is important that you can tell the bad from the good and follow only quality blogs that provide trustworthy information";
  lessElement.classList.remove("d-none");
}

function less() {
  let lessElement = document.getElementById("lessSymbol");
  let paragraphE1 = document.getElementById("paragraph");
  let plusElement = document.getElementById("plusSymbol");
  lessElement.classList.add("d-none");
  paragraphE1.textContent =
    "While Simple Programmer was originally created by founder John Sonmez to distill what he learned as a web developer into understandable content, today it is focused on helping software developers, programmers and other IT professionals improve their careers and their lives. This blog gets into the nitty-gritty of being a web developer and if you’ve wondered about something web development related, there’s a good chance they’ve written about it. Simple Programmer puts a fun spin on videos, keeping you engaged with humor while providing valuable content.  They’re constantly posting new articles – almost daily – so you’ll never be bored.";
  plusElement.classList.remove("d-none");
}
