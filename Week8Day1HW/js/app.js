// Vue local component for navigation
Vue.component("site-nav", {
  template: `
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Food Blog</a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="item in menu" :key="item">
            <a class="nav-link" href="#">{{ item }}</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  data() {
    return {
      menu: ["Home", "Recipes", "Lifestyles", "Videos", "About"]
    };
  }
});

new Vue({
  el: "#app",
  data: {
    image: {
      src: "images/chili.jpg",
      alt: "White Chicken Chili"
    },
    posts: [
      {
        author: "Brianna",
        date: "February 18, 2021",
        time: "3:30 pm",
        text:
          "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin."
      },
      {
        author: "LINH",
        date: "February 15, 2021",
        time: "9:46 am",
        text:
          "I just made this soup today and it’s so tasty! It’s a winner!"
      },
      {
        author: "CATHERINE LEONARDO",
        date: "February 13, 2021",
        time: "12:58 pm",
        text:
          "This White Chicken Chili is now an all-time favorite for me."
      },
      {
        author: "KALI",
        date: "February 13, 2021",
        time: "11:31 am",
        text:
          "This recipe is dynamite! Definitely adding it to my rotation."
      }
    ]
  }
});