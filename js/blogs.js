const article1 = {
  image: `https://img.freepik.com/free-photo/lifestyle_1122-1578.jpg?size=626&ext=jpg&uid=R97350360&ga=GA1.2.328877591.1686104943&semt=ais`,
  title: `PERSONAGE`,
  body: `Life, what can I say? I am only in my twenties. I barely understand it. Way too young to even make an attempt at that. Well, on some days I am certain about the things that I want. On other days such as today I become lost. So utterly lost that doubt creeps in. I doubt myself, my worth and even lose sense of every accomplishment  made. On such days life humbles. It brings me back to earth, down and  onto my knees. Such days make me emotional. On the verge of tears because I could very easily be nothing. The past no matter how elegant it was is erased. It is simply but memories. Plus, the present is no gift, it is a seemingly heavy load. The burden of life, a cursed spell cast upon me. Don't get me started on the stark darkness that is the future. Is there any chance really of figuring it out?
    Life remains a mystery to me. I know what you think. That I am young, too young to be stressed about this. That I still have so much time on my hands to still figure it out. I wonder. What if this is it? Do all my dreams and aspirations go up in flames and turn into smoke vanishingbwith the wind? Who am I? Why am I here? Do I deserve to be? Am I doing enough? I wonder if this is God's plan for me. Is He looking down on me right now and smiling? Smiling at my nature. My foolishness. Smiling at my waivering faith in Him. I think that He smiles  knowing that my race isn't run yet. That this gloom and despondency is just one of the challenges He set for me to overcome, for my being to hack life and realise His majesty. For me to grow in understanding.
    It is scary, not going to lie. I am trembling. If He is seeing this I hope that He gives me strength. Strength to hold on. Even more strength to let go. I hope that I find my way in this maze of life. That eventually, the roads travelled by those who came before me open up. That the path created for me takes shape and becomes easy to tread on. That I will not merely crawl, but absolutely walk believing in Him. He who gives me strength. Believing in myself.
    Belief that one day I will be enough. Good enough. Wise enough and old enough.For life, for someone. For ME
    `,
  date: `
    August 06, 2022
    `,
};
console.log(article1);

let searchResults = document.querySelector(".search-results");

searchResults.innerHTML = `
  <article class="item">
  <div class="image">
  
  <img src="${article1.image}" alt=""></img> 
 </div>
 <div class="title">
  ${article1.title}
 </div>
 <div class="body">
  ${article1.date}
 </div>
</article>
  `;