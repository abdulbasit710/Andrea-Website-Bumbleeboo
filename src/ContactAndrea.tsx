import {useEffect,useState} from 'react';
import type {FormEvent} from 'react';
import {Link} from 'react-router-dom';
import {asset,bookPath,content as c} from './content';
import './more-pages.css';

export default function ContactAndrea(){
  const [formStatus,setFormStatus]=useState('');
  const contactEmail=(c.contact as {email:string|null}).email;
  useEffect(()=>{
    const previous=document.title;
    document.title='Contact Andrea | Andrea Leigh Hayes';
    return()=>{document.title=previous};
  },[]);

  const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    if(!contactEmail)return;
    const fields=new FormData(event.currentTarget);
    const name=String(fields.get('name')||'').trim();
    const email=String(fields.get('email')||'').trim();
    const topic=String(fields.get('topic')||'General enquiry');
    const message=String(fields.get('message')||'').trim();
    if(!name||!email||!message)return;
    const subject=encodeURIComponent(`Website message: ${topic}`);
    const body=encodeURIComponent(`From: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`);
    window.location.href=`mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setFormStatus('Your email app should open with the message ready to send. Press Send there to finish.');
  };

  return <main className="contact-page">
    <section className="contact-hero" aria-labelledby="contact-title">
      <div className="wrap contact-hero-grid">
        <div className="contact-copy">
          <span className="contact-kicker">HELLO FROM ANDREA'S CORNER OF THE WORLD <span aria-hidden="true">✦</span></span>
          <h1 id="contact-title">Let's keep the <em>conversation</em> going.</h1>
          <p>Have a question about Andrea or Bumbleboo? This is the place to find ways to connect.</p>
          <a className="pill contact-hero-button" href="#contact-form">Write Andrea a note <span aria-hidden="true">↓</span></a>
        </div>
        <div className="contact-art" aria-hidden="true"><div className="contact-envelope"><span className="contact-envelope-heart">♥</span><div className="contact-letter"><span>hello!</span><img src={asset(c.brand.character)} alt="" width="410" height="375"/></div></div><span className="contact-art-star">✳</span><span className="contact-art-note">a little note<br/>goes a long way <b>♡</b></span></div>
      </div>
      <svg className="contact-wave" viewBox="0 0 1440 65" preserveAspectRatio="none" aria-hidden="true"><path d="M0 28C170 60 230 0 380 29S640 62 780 29 1040 1 1180 29 1360 48 1440 20V65H0Z" fill="#fff8ea"/></svg>
    </section>
    <section className="contact-form-section" id="contact-form" aria-labelledby="contact-form-title"><div className="wrap contact-form-grid"><div className="contact-form-intro"><span className="contact-kicker">A LITTLE NOTE FOR ANDREA</span><h2 id="contact-form-title">Let's hear from <em>you.</em></h2><p>Questions, thoughts, or a hello — write your message here and send it from your email app.</p><div className="contact-direct"><span aria-hidden="true">✉</span><div><strong>Prefer to write directly?</strong><a href={`mailto:${contactEmail}`}>{contactEmail}</a></div></div><span className="contact-form-spark" aria-hidden="true">✦</span></div><form className="contact-form" onSubmit={handleSubmit}><div className="contact-form-row"><label>Your name<input name="name" type="text" autoComplete="name" placeholder="Your name" maxLength={100} required/></label><label>Your email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={254} required/></label></div><label>What's your message about?<select name="topic" defaultValue="General enquiry"><option>General enquiry</option><option>Bumbleboo and the book</option><option>The Flag Song</option><option>Something else</option></select></label><label>Your message<textarea name="message" placeholder="Write your note to Andrea..." rows={6} maxLength={5000} required/></label><div className="contact-form-bottom"><button className="pill" type="submit">Open email to send <span aria-hidden="true">↗</span></button><p>Your email app opens with the message ready. Press Send there to finish.</p></div>{formStatus&&<p className="contact-form-status" role="status">{formStatus}</p>}</form></div></section>
    <section className="contact-explore" aria-labelledby="contact-explore-title"><div className="wrap"><div className="contact-explore-head"><span className="contact-kicker">WHILE YOU'RE HERE</span><h2 id="contact-explore-title">There's more to explore.</h2></div><div className="contact-cards">
      <Link className="contact-card contact-card-pink" to="/meet-andrea"><span className="contact-card-mark" aria-hidden="true">✦</span><span className="contact-card-index">01 / THE STORYTELLER</span><h3>Meet Andrea</h3><p>Get to know the person behind the pages.</p><span className="contact-card-action">Read her story <span aria-hidden="true">↗</span></span></Link>
      <Link className="contact-card contact-card-blue" to="/the-flag-song"><span className="contact-card-mark" aria-hidden="true">♫</span><span className="contact-card-index">02 / THE MUSIC</span><h3>Listen to the Song</h3><p>Make a little room for music and imagination.</p><span className="contact-card-action">Press play <span aria-hidden="true">↗</span></span></Link>
      <Link className="contact-card contact-card-yellow" to={bookPath}><span className="contact-card-mark" aria-hidden="true">✿</span><span className="contact-card-index">03 / THE ADVENTURE</span><h3>Discover the Book</h3><p>Follow Bumbleboo on a colourful journey.</p><span className="contact-card-action">Explore the story <span aria-hidden="true">↗</span></span></Link>
    </div></div></section>
  </main>;
}
