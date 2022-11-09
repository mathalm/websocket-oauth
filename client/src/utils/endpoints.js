export const saveInfos = async (body) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    username: body.userName,
    password: body.password,
    email: body.email,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  await fetch("http://localhost:3030/saveInfosLogin", requestOptions)
    .then((response) => response.text())
    // .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const verifyEmailAlreadyExists = async (email) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  let exists = {};

  await fetch(
    `http://localhost:3030/verifyEmailAlreadyExist/${email}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => (exists = result))
    .catch((error) => console.log("error", error));
  if (exists) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
};
export const getGoogleInfo = async (accessToken, passwordC) => {
  let body = {}
  
  await fetch(
    `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`
  )
    .then((response) => response.json())
    .then((result) => body = result);
    if(body){
      console.log(body);
      let userName = body.given_name + ' ' + body.family_name;
      let password = passwordC;
      let email = body.email;

      saveInfos({
        userName,
        password,
        email,
      });
    }

  // `{
  //     email: "matheuscsalmeida@gmail.com",
  //     family_name: "Almeida",
  //     given_name: "Matheus",
  //     id: "102243342794218842357",
  //     locale: "pt-BR",
  //     name: "Matheus Almeida (J2)",
  //     picture:
  //       "https://lh3.googleusercontent.com/a/ALm5wu1_-xI7OpE-d4aisGJ-ezp-0ZKA6xjDx3mfAYkHtbE=s96-c",
  //     verified_email: true,
  //   }`
};
