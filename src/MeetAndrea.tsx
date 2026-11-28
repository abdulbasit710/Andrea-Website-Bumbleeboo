import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {asset,bookPath,content as c,songPath} from './content';
import './meet-andrea.css';

export default function MeetAndrea(){
  useEffect(()=>{
    const previousTitle=document.title;
    document.title='Meet Andrea Leigh Hayes | Bumbleboo';
    return()=>{document.title=previousTitle};
  },[]);

  return <main className="meet-page">
    <section className="meet-hero" aria-labelledby="meet-title">
      <div className="wrap meet-hero-grid">
        <div className="meet-hero-copy">
          <span className="meet-kicker"><span aria-hidden="true">✦</span> THE PERSON BEHIND THE PAGES</span>
          <h1 id="meet-title">Hello, I'm <em>Andrea.</em></h1>
          <p className="meet-intro">Storyteller. Music lover. Champion of little imaginations.</p>
          <p>Every big adventure begins with a little curiosity. Meet the voice behind Bumbleboo and the place that inspired her first story.</p>
          <a className="pill" href="#andrea-story">Get to know Andrea <span aria-hidden="true">↓</span></a>
        </div>
        <div className="meet-hero-art">
          <div className="meet-portrait-frame"><img src={asset(c.author.image)} alt="Andrea Leigh Hayes smiling in a yellow dress" width="496" height="800"/></div>
          <div className="meet-art-sun" aria-hidden="true">✳</div>
          <div className="meet-art-sticker" aria-hidden="true">dream<br/>a little<br/>bigger! <span>✦</span></div>
          <img className="meet-hero-bee" src={asset(c.brand.character)} alt="" width="410" height="375"/>
        </div>
      </div>
      <svg className="meet-divider" viewBox="0 0 1440 62" preserveAspectRatio="none" aria-hidden="true"><path d="M0 22C160 62 260 6 400 28S650 58 780 25 1050 7 1180 34 1360 46 1440 18V62H0Z" fill="#fff9ed"/></svg>
    </section>

    <section className="meet-story" id="andrea-story" aria-labelledby="meet-story-title">
      <div className="wrap meet-story-grid">
        <div className="meet-story-heading">
          <span className="meet-kicker">A LITTLE ABOUT ANDREA</span>
          <h2 id="meet-story-title">From the stage to the <em>storybook.</em></h2>
          <span className="meet-handdrawn" aria-hidden="true">↝</span>
        </div>
        <div className="meet-story-copy">
          <p className="meet-story-lead">Creativity has always been at the heart of Andrea's world.</p>
          <p>{c.author.bioParagraphs[0]}</p>
          <p>{c.author.bioParagraphs[1]}</p>
          <div className="meet-story-tags" aria-label="Andrea's creative interests"><span>Storytelling</span><span>Music</span><span>Young imaginations</span></div>
          <Link className="meet-song-link" to={songPath}>Listen to Power of the Union <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>

    <section className="meet-inspiration" aria-labelledby="meet-inspiration-title">
      <div className="wrap meet-inspiration-grid">
        <div className="meet-inspiration-art">
          <div className="meet-second-portrait"><img src={asset(c.author.secondaryImage)} alt="Portrait of Andrea Leigh Hayes" width="1000" height="1180" loading="lazy"/></div>
          <div className="meet-image-note">A life full of stories <span aria-hidden="true">♡</span></div>
        </div>
        <div className="meet-inspiration-copy">
          <span className="meet-kicker">THE PLACE THAT SPARKED A STORY</span>
          <h2>Inspired by a place she calls <em>home.</em></h2>
          <p>{c.author.bioParagraphs[2]}</p>
          <p>That love became <strong>Bumbleboo discovers the UAE</strong>: a colourful adventure for curious little readers.</p>
          <Link className="pill" to={bookPath}>Discover the Book <span aria-hidden="true">›</span></Link>
        </div>
      </div>
    </section>

    <section className="meet-closing" aria-labelledby="meet-closing-title">
      <div className="wrap meet-closing-inner">
        <img src={asset(c.brand.character)} alt="" width="410" height="375" loading="lazy"/>
        <div><span className="meet-kicker">AND THE ADVENTURE CONTINUES...</span><h2 id="meet-closing-title">Big adventures begin with little imaginations.</h2><Link className="pill pill-outline" to={bookPath}>Meet Bumbleboo <span aria-hidden="true">›</span></Link></div>
      </div>
    </section>
  </main>;
}
