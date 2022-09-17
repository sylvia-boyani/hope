import React from 'react'
import './portfolio.css'
import img1 from '../../assets/bisho.jpg'
import img2 from '../../assets/slybw.jpg'
import img3 from '../../assets/James.jpg'
import img4 from '../../assets/slybw.jpg'
import img5 from '../../assets/slybw.jpg'
import img6 from '../../assets/concert.jpg'


const portfolio = () => {
  return (
    <section id = "portfolio">
      <h2>Meet Our Leaders</h2>

      <div className='container portfolio_container'>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
           <img src={img1} alt= ""/>
          </div>
          <h3>Bishop and Chairman</h3>
          <div className= "portfolio_item-cta">
          <a href="https://github.com/sylvia-boyani" className="btn" target="_blank" rel="noOpener noreferrer">Let's talk</a>
          <a href="https://github.com/sylvia-boyani" className="btn btn-primary" target="_blank" rel="noOpener noreferrer">Read More</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
           <img src={img2} alt= ""/>
          </div>
          <h3>Vice Chairman</h3>
          <div className= "portfolio_item-cta">
          <a href="https://github.com/sylvia-boyani" className="btn" target="_blank" rel="noOpener noreferrer">Let's talk</a>
          <a href="https://github.com/sylvia-boyani" className="btn btn-primary" target="_blank" rel="noOpener noreferrer">Read More</a>
          </div>
         
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
           <img src={img3} alt= ""/>
          </div>
          <h3>Secretary General</h3>
          <div className= "portfolio_item-cta">
          <a href="https://github.com/sylvia-boyani" className="btn" target="_blank" rel="noOpener noreferrer">Let's talk</a>
          <a href="https://github.com/sylvia-boyani" className="btn btn-primary" target="_blank" rel="noOpener noreferrer">Read More</a>
          </div>
          
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
           <img src={img4} alt= ""/>
          </div>
          <h3>Treasurer</h3>
          <div className= "portfolio_item-cta">
          <a href="https://github.com/sylvia-boyani" className="btn" target="_blank" rel="noOpener noreferrer">Let's talk</a>
          <a href="https://github.com/sylvia-boyani" className="btn btn-primary" target="_blank" rel="noOpener noreferrer">Read More</a>
          </div>
          
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
           <img src={img5} alt= ""/>
          </div>
          <h3>Youth Leader</h3>
          <div className= "portfolio_item-cta">
          <a href="https://github.com/sylvia-boyani" className="btn" target="_blank" rel="noOpener noreferrer">Let's talk</a>
          <a href="https://github.com/sylvia-boyani" className="btn btn-primary" target="_blank" rel="noOpener noreferrer">Read More</a>
          </div>
          
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
           <img src={img6} alt= ""/>
          </div>
          <h3>Sunday School Lead</h3>
          <div className= "portfolio_item-cta">
          <a href="https://github.com/sylvia-boyani" className="btn" target="_blank" rel="noOpener noreferrer">Let's talk</a>
          <a href="https://github.com/sylvia-boyani" className="btn btn-primary" target="_blank" rel="noOpener noreferrer">Read More</a>
          </div>
          
        </article>
      </div>
    </section>
  )
}

export default portfolio
