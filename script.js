$(function () {
  //Клик по кнопке
  $("#add").click(function () {

    //Проверка заполненности формы
    if ($("#description").val() !== "" && $("#name").val() !== "") {
      //Если форма заполнена - скрываем пустой список
      if ($("#empty-order").css("display") == "block") {
        $("#empty-order").hide();
      }
      //Создаём блок
      var myDiv = document.createElement("div");
      myDiv.className = "ticket";
      //В блоке создаём заголовок
      var myDivH2 = document.createElement("h2");
      $(myDivH2).text($("#name").val());
      $(myDivH2).append(
        '<span class="delete" title="Удалить">&#128939;</span>'
      );
      $(myDivH2).appendTo(myDiv);
      //Срелочку сворачивания
      var myDivSpan = document.createElement("span");
      myDivSpan.className = "collapse";
      $(myDivSpan).html("&#9206;").attr("title", "Свернуть");
      $(myDivSpan).appendTo(myDiv);
      //В блоке создаём описание
      var myDivP = document.createElement("p");
      $(myDivP).text($("#description").val() + " рублей. " + $("#size").val() + "шт.");
      $(myDivP).appendTo(myDiv);
      //Вставляем блок в левую колонку
      $(myDiv).appendTo("#left-column");
      //Сбрасываем форму
      $("#name").val("").css("border", "1px solid  rgb(235, 235, 235)");
      $("#description").val("").css("border", "1px solid  rgb(235, 235, 235)");
      $("#size").val("").css("border", "1px solid  rgb(235, 235, 235)");
    } else {
      //Выделяем незаполненные поля
      if ($("#name").val() === "") {
        $("#name").css("border", "3px solid red");
      }
      if ($("#description").val() ===  "") {
        $("#description").css("border", "3px solid red");
      }
      if ($("#size").val() ===  "") {
        $("#size").css("border", "3px solid red");
      }
     }
    //Выключаем кнопку
    return false;
  });

        //top secret
            if ($("#name").val() ===  "Scatman") {
        $("#description").val("Jonh");
      }

  //Клик по крестику - удаление
  $("#left-column").on("click", "span.delete", function () {
    $(this).parents(".ticket").remove();
    //Если задач нет - возвращаем надпись
    if ($("#left-column").children(".ticket").length === 0) {
      $("#empty-order").show();
    }
  });
  //Сворачивание блока
  $("#left-column").on("click", "span.collapse", function () {
    $(this).next("p").hide();
    $(this).parents(".ticket").animate({ minHeight: "61px" }, 1000);
    $(this).toggleClass("collapse expand");
    $(this).html("&#9207;").attr("title", "Развернуть");
  });
  //Разворачивание блока
  $("#left-column").on("click", "span.expand", function () {
    $(this).next("p").show();
    $(this).parents(".ticket").animate({ minHeight: "137px" }, 1000);
    $(this).toggleClass("collapse expand");
    $(this).html("&#9206;").attr("title", "Свернуть");
  });
});

function signIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

// Signs-out of Friendly Chat.
function signOut() {
  // Sign out of Firebase.
  firebase.auth().signOut();
}

// Initiate firebase auth.
function initFirebaseAuth() {
  // Listen to auth state changes.
  firebase.auth().onAuthStateChanged(authStateObserver);
}

// Returns the signed-in user's profile Pic URL.
function getProfilePicUrl() {
  return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png';
}

// Returns the signed-in user's display name.
function getUserName() {
  return firebase.auth().currentUser.displayName;
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!firebase.auth().currentUser;
}
