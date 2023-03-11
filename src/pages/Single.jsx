import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'
const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://1.bp.blogspot.com/-nxIHsF8lbzc/Xt9G8iZraWI/AAAAAAAABSQ/pMGiMhNSWY0ARD-d14Zkw6q73k120MNMACNcBGAsYHQ/s1600/goa.jpg"/>
        <div className="user">
        <img src="https://th.bing.com/th/id/R.74d10412d951364022a386535f93d63d?rik=Wt2SUKHB7ILaEA&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f03%2f1956341beautiful-girl.jpg&ehk=VixYhPwlYR6LCsfGIrOQAMrWNabWuOrCiQJJBHSu6X8%3d&risl=&pid=ImgRaw&r=0"/>
        <div className="info">
        <span>John</span>
        <p>Posted 2 days ago</p>
      </div>
      <div className="edit">
        <Link to={`/write?edit=2`}></Link>
        <img src={Edit} alt="" />
        <img src={Delete} alt="" />
      </div>
      </div>
      <h1>Goa </h1>
        <p>I was fortunate enough to spend a week in Goa at the beginning of April
             on a work educational trip, an opportunity that would allow me to explore 
             the state almost in its entirety, as well as all of the properties we offer
              to our customers. The trip provided a fantastic insight into the
               possibilities of a holiday to Goa and a greater impression of
                what exactly we’re selling at The Goa Experience to holidaymakers
                 hoping to capture some Indian sunshine, culture and character.
         <br />
        <br />
        I was fortunate enough to spend a week in Goa at the beginning of April
             on a work educational trip, an opportunity that would allow me to explore 
             the state almost in its entirety, as well as all of the properties we offer
              to our customers. The trip provided a fantastic insight into the
               possibilities of a holiday to Goa and a greater impression of
                what exactly we’re selling at The Goa Experience to holidaymakers
                 hoping to capture some Indian sunshine, culture and character.  </p>
         
      </div>
      <Menu />


    </div>
  )
}

export default Single
