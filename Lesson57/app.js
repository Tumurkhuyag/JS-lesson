function interviewQuestion(job) {
  if (job === "developer") {
    return function(name) {
      console.log(
        name +
          ", Та JavasScript-ын prototype гэж юу болох, яаж ажилдаг талаар яриач?"
      );
    };
  } else if (job === "designer") {
    return function(name) {
      console.log(
        name +
          ", Та хийж байсан хамгийн онцлог UX -тэй апп -аа нь нэрлэнэ үү?, Яагаад?"
      );
    };
  } else if (job === "manager") {
    return function(name) {
      console.log(
        name +
          ", Та удирдаж байсан хамгийн үлгэр жишээ баг болон гаргасан гүйцэтгэлийнхээ талаар ярина уу?"
      );
    };
  }
}

var devQuestion = interviewQuestion("developer");
devQuestion("Мөнхбаатар");

interviewQuestion("designer")("Төмөрхуяг");
interviewQuestion("manager")("Сор");
