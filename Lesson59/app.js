// Closure (part-1)

function showPost(content) {
  var editedContent =
    "Шинэ мэдээ: \n\n" +
    content +
    "\n\nДэлгэрэнгүй мэдээллийг publish.mn сайт -аас.";

  console.log(editedContent);

  return function() {
    var email = prompt(
      editedContent +
        "\n\nИмэйл хаягаа оруулж бусад шинэ мэдээлэлтэй түргэн шуурхай танилцаж байх."
    );

    document.write("Баярлалаа!\n\n" + email + " амжилттай бүртгэгдлээ.");
  };
}

var medee = "90% хямдрал дуусахад ердөө нэг хоног үлдлээ!";
var askEmailFunction = showPost(medee);
setTimeout(askEmailFunction, 5000);
