import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/logo.png"
const Home = () => {
  
      const posts=[
      {
        id:1,
        title: "Goa" ,
        desc: "I was fortunate enough to spend a week in Goa at the beginning of April on a work educational trip, an opportunity that would allow me to explore the state almost in its entirety, as well as all of the properties we offer to our customers.  ",
        img:"https://1.bp.blogspot.com/-nxIHsF8lbzc/Xt9G8iZraWI/AAAAAAAABSQ/pMGiMhNSWY0ARD-d14Zkw6q73k120MNMACNcBGAsYHQ/s1600/goa.jpg"
      },
      {
        id:2,
        title: "Agra" ,
        desc: "August was really a very rainy month. But a bit humid with no sun shine for couple of days. I spent time in local markets too..Mainly for shoes and handcrafted items. Petha and dalmoth were sweet and namkeen. Wonderful trip where I saw different markets.. like sadar sadar bazar. Shubhash bajar.. market near jama masjid was wonderful",
        img:"https://i.pinimg.com/originals/39/1d/1c/391d1cffbb887f66d26c5a024272c09a.jpg"
      },
      {
        id:3,
        title: "Gokarna" ,
        desc: " i did a solo trip to Gokarna. I desperately needed a break from this corporate life.I was tired and bit frustrated too. Just wanted to be alone for some days and bring out the better version of myself. Now i am feeling much better after that amazing trip. ",
        img:"https://external-preview.redd.it/Tj1DtZqj5OZzz8D-yFIYNLu52aSCzjpXFZX77Td271A.jpg?auto=webp&s=814096c39bbb739942896a41a07153c3dcd27ba2"
      },
      {
        id:4,
        title: "Leh Ladakh" ,
        desc: "Full day visiting Shey, Thiksey. After breakfast, proceed to Shey - it was the ancient capital of Ladakh. The importance which was attached to Shey - the seat of Ladakh's heartland. Overnight at hotel in leh. ",
        img:"https://bestescape.in/wp-content/uploads/2020/03/zanskar-valley-best-escape.jpg"
      },
      ];
      return (
        <div className='home'>
            <div className="posts">
                {posts.map((post)=>(
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="hello"/>
                        </div>
                        <div className="content">
                            <Link className='link' to={`/post/${post.id}`}>
                            <h1>{post.title}</h1>
                            <p>{post.desc}</p>
                            <button>Read More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  );
};

export default Home
