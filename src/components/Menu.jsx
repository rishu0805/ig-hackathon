import React from 'react'

const Menu = () => {
    const posts=[
      {
        id:2,
        title: "Agra" ,
        desc: "Praesentium culpa ad, alias sit omnis assumenda tempora ipsa, molestiae neque, ullam asperiores? Itaque animi corporis in. ",
        img:"https://i.pinimg.com/originals/39/1d/1c/391d1cffbb887f66d26c5a024272c09a.jpg"
      },
      {
        id:3,
        title: "Gokarna" ,
        desc: "Praesentium culpa ad, alias sit omnis assumenda tempora ipsa, molestiae neque, ullam asperiores? Itaque animi corporis in. ",
        img:"https://external-preview.redd.it/Tj1DtZqj5OZzz8D-yFIYNLu52aSCzjpXFZX77Td271A.jpg?auto=webp&s=814096c39bbb739942896a41a07153c3dcd27ba2"
      },
        
        ];
  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map((post)=>(
                    <div className="post" key={post.id}>
                            <img src={post.img} alt="hello"/>
                            <h2>{post.title}</h2>
                            <button>Read More</button>
                    </div>
                ))}
    </div>
  )
}

export default Menu
