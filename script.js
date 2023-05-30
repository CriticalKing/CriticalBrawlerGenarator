document.addEventListener("DOMContentLoaded", function () {

  let img1 = document.querySelector("#img1");

  let img2 = document.querySelector("#img2");

  let img3 = document.querySelector("#img3");

  let b, num, num2;

  let brawler_name = document.querySelector("#name");

  let brawler_rarity = document.querySelector("#rarity");

  let brawler_category = document.querySelector("#category");

  let brawler_name2 = document.querySelector("#name2");

  let brawler_rarity2 = document.querySelector("#rarity2");

  let brawler_category2 = document.querySelector("#category2");

  let go_btn = document.querySelector(".go_btn");

  let body = document.querySelector("#main_div");

  let rarity_dropdown = document.querySelector("#rarity_dropdown");

  let brawlers_outer_div = document.querySelector("#brawlers_outer_div");

  let brawler_list_cont = document.querySelector("#brawler_list_cont");

  let sel_img = document.querySelector(".sel_img");

  let brawler_list_apply_btn = document.querySelector(

    "#brawler_list_apply_btn"

  );

  let sel_brawlers_btn = document.querySelector("#select_brawlers_btn");

  let cls_btn = document.querySelector("#cls_btn");

  let inp_rare = document.querySelector("#rare");

  let inp_super_rare = document.querySelector("#super_rare");

  let inp_epic = document.querySelector("#epic");

  let inp_mythic = document.querySelector("#mythic");

  let inp_lagendary = document.querySelector("#lagendary");

  let inp_chromatic = document.querySelector("#chromatic");

  const allBrawlers = [

    (rare = [

      {

        name: "shelly",

        rarity: "starting",

        category: "",

      },

      {

        name: "barley",

        rarity: "rare",

        category: "",

      },

      {

        name: "brock",

        rarity: "rare",

        category: "",

      },

      {

        name: "bull",

        rarity: "rare",

        category: "",

      },

      {

        name: "rosa",

        rarity: "rare",

        category: "",

      },

      {

        name: "primo",

        rarity: "rare",

        category: "",

      },

      {

        name: "poco",

        rarity: "rare",

        category: "",

      },

      {

        name: "nita",

        rarity: "rare",

        category: "",

      },

      {

        name: "jacky",

        rarity: "rare",

        category: "",

      },

      {

        name: "colt",

        rarity: "rare",

        category: "",

      },

    ]),

    (super_rare = [

      {

        name: "jessie",

        rarity: "super rare",

        category: "",

      },

      {

        name: "gus",

        rarity: "super rare",

        category: "",

      },

      {

        name: "darrly",

        rarity: "super rare",

        category: "",

      },

      {

        name: "carl",

        rarity: "super rare",

        category: "",

      },

      {

        name: "8bit",

        rarity: "super rare",

        category: "",

      },

      {

        name: "mike",

        rarity: "super rare",

        category: "",

      },

      {

        name: "tick",

        rarity: "super rare",

        category: "",

      },

      {

        name: "rico",

        rarity: "super rare",

        category: "",

      },

      {

        name: "penny",

        rarity: "super rare",

        category: "",

      },

    ]),

    (epic = [

      {

        name: "edger",

        rarity: "epic",

        category: "",

      },

      {

        name: "bonnie",

        rarity: "epic",

        category: "",

      },

      {

        name: "bo",

        rarity: "epic",

        category: "",

      },

      {

        name: "bibi",

        rarity: "epic",

        category: "",

      },

      {

        name: "bea",

        rarity: "epic",

        category: "",

      },

      {

        name: "nani",

        rarity: "epic",

        category: "",

      },

      {

        name: "grom",

        rarity: "epic",

        category: "",

      },

      {

        name: "griff",

        rarity: "epic",

        category: "",

      },

      {

        name: "frank",

        rarity: "epic",

        category: "",

      },

      {

        name: "emz",

        rarity: "epic",

        category: "",

      },

      {

        name: "stu",

        rarity: "epic",

        category: "",

      },

      {

        name: "piper",

        rarity: "epic",

        category: "",

      },

      {

        name: "pam",

        rarity: "epic",

        category: "",

      },

      {

        name: "emz",

        rarity: "epic",

        category: "",

      },

    ]),

    (mythic = [

      {

        name: "mrp",

        rarity: "mythic",

        category: "",

      },

      {

        name: "willow",

        rarity: "mythic",

        category: "",

      },

      {

        name: "tara",

        rarity: "mythic",

        category: "",

      },

      {

        name: "squeak",

        rarity: "mythic",

        category: "",

      },

      {

        name: "sprout",

        rarity: "mythic",

        category: "",

      },

      {

        name: "mortis",

        rarity: "mythic",

        category: "",

      },

      {

        name: "max",

        rarity: "mythic",

        category: "",

      },

      {

        name: "gray",

        rarity: "mythic",

        category: "",

      },

      {

        name: "gene",

        rarity: "mythic",

        category: "",

      },

    ]),

    (lagendary = [

      {

        name: "meg",

        rarity: "lagendary",

        category: "",

      },

      {

        name: "leon",

        rarity: "lagendary",

        category: "",

      },

      {

        name: "crow",

        rarity: "lagendary",

        category: "",

      },

      {

        name: "chester",

        rarity: "lagendary",

        category: "",

      },

      {

        name: "amber",

        rarity: "lagendary",

        category: "",

      },

      {

        name: "spike",

        rarity: "lagendary",

        category: "",

      },

      {

        name: "sandy",

        rarity: "lagendary",

        category: "",

      },

    ]),

    (chromatic = [

      {

        name: "ash",

        rarity: "chromatic",

        category: "",

      },

      {

        name: "belle",

        rarity: "chromatic",

        category: "",

      },

      {

        name: "buster",

        rarity: "chromatic",

        category: "",

      },

      {

        name: "buzz",

        rarity: "chromatic",

        category: "",

      },

      {

        name: "colette",

        rarity: "chromatic",

        category: "",

      },

      {

        name: "eve",

        rarity: "chromatic",

        category: "",

      },

      {

        name: "fang",

        rarity: "chromatic",

        category: "",

      },

      {

        name: "gale",

        rarity: "chromatic",

        category: "",

      },

      {

        name: "janet",

        rarity: "chromatic",

        category: "",

      },

      {

        name: "lola",

        rarity: "chromatic",

        category: "",

      },

      {

        name: "lou",

        rarity: "chromatic",

        category: "",

      },

      {

        name: "mandy",

        rarity: "chromatic",

        category: "",

      },

      {

        name: "otis",

        rarity: "chromatic",

        category: "",

      },

      {

        name: "rt",

        rarity: "chromatic",

        category: "",

      },

      {

        name: "ruffs",

        rarity: "chromatic",

        category: "",

      },

      {

        name: "sam",

        rarity: "chromatic",

        category: "",

      },

      {

        name: "surge",

        rarity: "chromatic",

        category: "",

      },

    ]),

  ];

  go_btn.addEventListener("click", function go() {

    let w = setInterval(function () {

      let anim_num = Math.floor(Math.random() * allBrawlers.length);

      let anim_num2 = Math.floor(Math.random() * allBrawlers.length);

      let anim_subnum = Math.floor(

        Math.random() * allBrawlers[anim_num].length

      );

      let anim_subnum2 = Math.floor(

        Math.random() * allBrawlers[anim_num2].length

      );

      img1.src = `img/${allBrawlers[anim_num][anim_subnum].name}.png`;

      img3.src = `img/${allBrawlers[anim_num2][anim_subnum2].name}.png`;

    }, 100);

    setTimeout(function () {

      clearInterval(w);

    }, 1000);

    setTimeout(function () {

      if (

        inp_rare.checked ||

        inp_super_rare.checked ||

        inp_epic.checked ||

        inp_mythic.checked ||

        inp_lagendary.checked ||

        inp_chromatic.checked

      ) {

        if (inp_rare.checked) {

          b = inp_rare.value;

        } else if (inp_super_rare.checked) {

          b = inp_super_rare.value;

        } else if (inp_epic.checked) {

          b = inp_epic.value;

        } else if (inp_mythic.checked) {

          b = inp_mythic.value;

        } else if (inp_lagendary.checked) {

          b = inp_lagendary.value;

        } else if (inp_chromatic.checked) {

          b = inp_chromatic.value;

        }

        num = b;

        num2 = b;

      } else {

        num = Math.floor(Math.random() * allBrawlers.length);

        num2 = Math.floor(Math.random() * allBrawlers.length);

      }

      let subnum = Math.floor(Math.random() * allBrawlers[num].length);

      let subnum2 = Math.floor(Math.random() * allBrawlers[num2].length);

      while (subnum == subnum2) {

        subnum = Math.floor(Math.random() * allBrawlers[num].length);

        subnum2 = Math.floor(Math.random() * allBrawlers[num2].length);

      }

      brawler_name.innerText = allBrawlers[num][subnum].name;

      brawler_rarity.innerText = allBrawlers[num][subnum].rarity;

      brawler_category.innerText = allBrawlers[num][subnum].category;

      brawler_name2.innerText = allBrawlers[num2][subnum2].name;

      brawler_rarity2.innerText = allBrawlers[num2][subnum2].rarity;

      brawler_category2.innerText = allBrawlers[num2][subnum2].category;

      img1.src = "img/" + allBrawlers[num][subnum].name + ".png";

      img3.src = "img/" + allBrawlers[num2][subnum2].name + ".png";

    }, 1000);

  });

  function ch_bg(n) {

    img1.src = `img/${n}.jpeg`;

    img3.src = `img/${n}.jpeg`;

    body.style.background = `url(/img/${n}.jpeg)`;

  }

  sel_brawlers_btn.addEventListener("click", function brawler_list() {

    brawlers_outer_div.style.display = "flex";

    let ab = allBrawlers.length;

    for (let i = 0; i < ab; i++) {

      let abi = allBrawlers[i].length;

      for (let y = 0; y < abi; y++) {

        let h = allBrawlers[i][y];

        let img = document.createElement("img");

        img.src = "img/" + h.name + ".png";

        img.className = "sel_img";

        brawler_list_cont.appendChild(img);

      }

    }

  });

  cls_btn.addEventListener("click", function () {

    brawlers_outer_div.style.display = "none";

  });

  let sidebar = document.querySelector("#side_bar");

  let sidebar_open_btn = document.querySelector(".fa-bars");

  let sidebar_close_btn = document.querySelector(".side_bar_close_btn");

  let isOpen = false;

  sidebar_open_btn.addEventListener("click", function () {

    if (isOpen == false) {

      sidebar.style.transform = "rotateY(0deg)";

      isOpen = true;

    }

  });

  sidebar_close_btn.addEventListener("click", function () {

    if (isOpen == true) {

      sidebar.style.transform = "rotateY(180deg)";

      isOpen = false;

    }

  });

});

