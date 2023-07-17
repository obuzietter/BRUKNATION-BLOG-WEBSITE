const article1 = {
  image: `https://img.freepik.com/free-photo/lifestyle_1122-1578.jpg?size=626&ext=jpg&uid=R97350360&ga=GA1.2.328877591.1686104943&semt=ais`,
  title: `PERSONAGE`,
  body: `Life, what can I say? I am only in my twenties. I barely understand it. Way too young to even make an attempt at that. Well, on some days I am certain about the things that I want. On other days such as today I become lost. So utterly lost that doubt creeps in. I doubt myself, my worth and even lose sense of every accomplishment  made. On such days life humbles. It brings me back to earth, down and  onto my knees. Such days make me emotional. On the verge of tears because I could very easily be nothing. The past no matter how elegant it was is erased. It is simply but memories. Plus, the present is no gift, it is a seemingly heavy load. The burden of life, a cursed spell cast upon me. Don't get me started on the stark darkness that is the future. Is there any chance really of figuring it out?
  Life remains a mystery to me. I know what you think. That I am young, too young to be stressed about this. That I still have so much time on my hands to still figure it out. I wonder. What if this is it? Do all my dreams and aspirations go up in flames and turn into smoke vanishingbwith the wind? Who am I? Why am I here? Do I deserve to be? Am I doing enough? I wonder if this is God's plan for me. Is He looking down on me right now and smiling? Smiling at my nature. My foolishness. Smiling at my waivering faith in Him. I think that He smiles  knowing that my race isn't run yet. That this gloom and despondency is just one of the challenges He set for me to overcome, for my being to hack life and realise His majesty. For me to grow in understanding.
  It is scary, not going to lie. I am trembling. If He is seeing this I hope that He gives me strength. Strength to hold on. Even more strength to let go. I hope that I find my way in this maze of life. That eventually, the roads travelled by those who came before me open up. That the path created for me takes shape and becomes easy to tread on. That I will not merely crawl, but absolutely walk believing in Him. He who gives me strength. Believing in myself.
  Belief that one day I will be enough. Good enough. Wise enough and old enough.For life, for someone. For ME
  `,
  date: `August 06, 2022`,
};

const article2 = {
  image: `https://img.freepik.com/premium-photo/life-is-better-colour-studio-shot-beautiful-young-woman-wearing-traditional-african-head-wrap-against-green-background_590464-27269.jpg?size=626&ext=jpg&uid=R97350360&ga=GA1.1.328877591.1686104943&semt=sph`,
  title: `AT HOME`,
  body: `I don't get it
The serenity
My anxieties at bay
My demons away
Unlike before
She must be a witch
That's why it's hard to stay away

Presently I am high
So much power in her eyes
Not to mention caramel thighs
Though she awakens some devil
She is worthy
I have to comply
Her graces give reason

My lofty praises
I revere her
I found treasure, a home
You don't abandon home
Home is where the heart is
And she
She keeps my heart`,
  date: `June 28, 2021`,
};

const article3 = {
  image: `https://img.freepik.com/free-photo/happy-boy-sitting-thinking-alone-park_1150-12119.jpg?size=626&ext=jpg&uid=R97350360&ga=GA1.2.328877591.1686104943&semt=ais`,
  title: `LET IT RAIN`,
  body: `Someone divine, perfect and special. Her name is despondency and she is charming. Her allure is ravishing, you find it unyielding to resist. She stifles each and every existence around you. You want to fight, to be unshackled of her heavy reign. However, she extends her hand out to you. She has you trapped. Confined within her head space, the aura she exudes  strangulates you.
As you try to catch a breath, your palm is suddenly filled. Warm and snug, the feel of her devastating touch. She plays with your biology, her overwhelming existence makes you frail. You cannot control your body. Instant pandemonium sets in as your mind caterwauls in a bid to take the reins over the rest of your body.
She is shrewd, sensing the resistance arising from your mind, she hauls your head up so that you look directly at her face. Prying into the chasm of your soul, she makes your mind crash. As the mind shuts down, the body goes with it too. In an unruly fashion, your body gravitates towards her. 
In her arms. She is vicious and she has you exactly where she wanted to see you. The gaze she keeps over you is hypnotic. A great daze takes over you. Slowly but certainly darkness squirms you up. 
You try to fight it as much as you can but with a few flutters,your eyelids shut. This is a darkness you are yet to encounter. Not the orange and gold dark before a sunrise. This is the type of dark that crops up in a complete solar eclipse. All sense of light and noise is blocked out. The apprehension of being left alone in silence. Serenity first, then total oblivion. You are surely petrified.
In a quick trice, hot liquid fills up in your eyes. The certain familiar feel of tears. It's only natural. In a time of chaos and uncertainty tears are bound to surface.  Traumatized by everything that is going on, the quick and sure take down by sadness serves as a trigger to open the flood gates. Let it rain. A snuffle that turns into a sob which turns into a cry brings forth uncontrollable weeping. A grown man, a boy in the least is crying like a toddler. Tears of pain. Sadness and defeat. All the barricades you put up over the last month or so haven't held against the mighty wrath and spleen  of her. Sadness, gloom and despondency. This is not an orderly eventuality, but you choose not to defy it. All the negative emotions and sensations stockpiled finally getting a clear cut circuit out. Let it rain. Let it rain. Let it rain. The only direction. The only way to get over this. The only way to overpower her strong hold on you. 
Literally crying it out. Burst at the seams and stand to get back your freedom. Temporarily disoriented by her. As the tears start to dwindle,as the seemingly lifetime supply starts to die out, a sense of betterment takes over.
Vigour and stability. What you need. You felt so weak but now you feel so powerful. Total contrast. A beautiful kind of contrast. Using the same palm that was violated, you wipe off the tears. No more spillage. You even afford a smile, even though it is wry. You are drained. At least tonight you can sleep. You will try to fix you. Starting with a well deserved rest.

The whole point of this piece is to show how sadness feels like. How it leads to breakdowns. I haven't really brought it out too well but this is as close as I can get, at least through my own sadness. I've also tried to show how crying helps. Yes shedding tears helps.The photo is of a Syrian child asked to smile by a journalist. You can see the relevance to the piece.  `,
  date: `October 30, 2020`,
};

let articles = [article1, article2, article3];

let searchResults = document.querySelector(".search-results");

articles.forEach((article) => {
  // console.log(article.date);

  let articleElement = document.createElement("article");
  searchResults.append(articleElement);

  articleElement.innerHTML = `
  <div class="image">
    <img src="${article.image}" alt=""></img> 
  </div>
  <div class="title">
    ${article.title}
  </div>
  <div class="body">
    ${article.date}
  </div>
`

articleElement.addEventListener("click", () => {
  console.log("Article clicked:", article.title);
  displayBox.innerHTML = `
<div class="title">${article.title}</div>
<div class="title">
<img src="${article.image}" alt="">

</div>
<div class="body">${article.body}</div>
<div class="date">${article.date}</div>
`
});


});

let searchBox = document.getElementById("search")

searchBox.addEventListener("input", () => {
  searchResults.innerHTML = ``
  articles.forEach((article) => {
      if (article.title.toLowerCase().includes(searchBox.value.toLowerCase())) {
          let articleElement = document.createElement("article");
          searchResults.append(articleElement);

          articleElement.innerHTML = `
    <div class="image">
    <img src="${article.image}" alt=""></img> 
    </div>
    <div class="title">
    ${article.title}
    </div>
    <div class="body">
    ${article.date}
    </div>
    `
          articleElement.addEventListener("click", () => {
              console.log("Article clicked:", article.title);
              displayBox.innerHTML = `
<div class="title">${article.title}</div>
<div class="title">
<img src="${article.image}" alt="">
</div>
<div class="body">${article.body}</div>
<div class="date">${article.date}</div>
`
          });

      }

  })

})

let main = document.querySelector("main")
let displayBox = document.createElement("div")
displayBox.className = "display"

displayBox.innerHTML = `
<div class="title">${article1.title}</div>
<div class="title">
<img src="${article1.image}" alt="">
</div>
<div class="body">${article1.body}</div>
<div class="date">${article1.date}</div>


`

main.append(displayBox)