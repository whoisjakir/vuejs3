var app = Vue.createApp({
    data(){
        return{
            tutorialInfo: {
                name: "Vue JS 3 Bangla Tutorial",
                githubLink: "https//github.com/whoisjakir/profile",
            },
            htmlCode: '<a href="https//:google.com">Google</a>'
        };
    }
});

app.mount("#app");