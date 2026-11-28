import {useEffect,useRef,useState} from 'react';
import {Link} from 'react-router-dom';
import {asset,content as c} from './content';
import './more-pages.css';

const songSource=asset('/assets/audio/flag-song-andrea.mp3');
const timeLabel=(seconds:number)=>`${Math.floor(seconds/60)}:${String(Math.floor(seconds%60)).padStart(2,'0')}`;

export default function FlagSong(){
  const audio=useRef<HTMLAudioElement>(null);
  const [playing,setPlaying]=useState(false);
  const [elapsed,setElapsed]=useState(0);
  const [duration,setDuration]=useState(0);
  const [error,setError]=useState(false);

  useEffect(()=>{
    const previous=document.title;
    document.title='Power of the Union | Andrea Leigh Hayes';
    return()=>{audio.current?.pause();document.title=previous};
  },[]);

  const toggle=async()=>{
    const player=audio.current;
    if(!player)return;
    if(!player.paused){player.pause();return}
    try{await player.play();setError(false)}catch{setError(true)}
  };

  return <main className="song-page">
    <section className="song-hero" aria-labelledby="song-title">
      <div className="wrap song-grid">
        <div className="song-copy">
          <span className="song-kicker">A SONG FROM ANDREA <span aria-hidden="true">✦</span></span>
          <h1 id="song-title">Power of the <em>Union.</em></h1>
          <p>Celebrate the spirit of the UAE through Andrea's song. Press play to listen.</p>
          <div className="song-player" aria-label="Power of the Union audio player">
            <audio ref={audio} src={songSource} preload="metadata" onLoadedMetadata={event=>setDuration(event.currentTarget.duration)} onTimeUpdate={event=>setElapsed(event.currentTarget.currentTime)} onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onEnded={()=>setPlaying(false)} onError={()=>setError(true)}/>
            <div className="song-player-top"><button className="song-play" type="button" onClick={toggle} aria-label={playing?'Pause Power of the Union':'Play Power of the Union'}>{playing?'Ⅱ':'▶'}</button><div><strong>Power of the Union</strong><span>Andrea Leigh Hayes</span></div><span className="song-player-note" aria-hidden="true">♫</span></div>
            <label className="sr-only" htmlFor="song-progress">Song position</label>
            <input id="song-progress" className="song-progress" type="range" min="0" max={duration||1} step="0.1" value={elapsed} onChange={event=>{if(audio.current)audio.current.currentTime=Number(event.target.value)}} aria-valuetext={`${timeLabel(elapsed)} of ${timeLabel(Math.ceil(duration))}`} style={{'--progress':`${duration?elapsed/duration*100:0}%`} as React.CSSProperties}/>
            <div className="song-times"><span>{timeLabel(elapsed)}</span><span>{duration?timeLabel(Math.ceil(duration)):'2:18'}</span></div>
            {error&&<p className="song-error" role="alert">The song could not play. Please try reloading the page.</p>}
          </div>
          <p className="song-listen-note">The song starts when you press play.</p>
        </div>
        <div className="song-art" aria-hidden="true">
          <span className="song-spark song-spark-one">♪</span><span className="song-spark song-spark-two">✦</span><span className="song-spark song-spark-three">♫</span>
          <div className={`song-record ${playing?'is-playing':''}`}><div className="song-record-label"><img src={asset(c.brand.character)} alt="" width="410" height="375"/></div></div>
          <div className="song-record-caption">made for little listeners <span>♥</span></div>
        </div>
      </div>
      <svg className="song-wave" viewBox="0 0 1440 65" preserveAspectRatio="none" aria-hidden="true"><path d="M0 33C160 0 250 64 410 33S670 0 800 34 1090 65 1220 31 1360 13 1440 30V65H0Z" fill="#fff8e8"/></svg>
    </section>
    <section className="song-after">
      <div className="wrap song-after-inner"><img src={asset(c.brand.character)} alt="" width="410" height="375" loading="lazy"/><div><span className="song-kicker">KEEP EXPLORING</span><h2>More wonder awaits.</h2><p>Get to know the storyteller behind the music, then fly into Bumbleboo's adventure.</p><div className="button-row"><Link className="pill" to="/meet-andrea">Meet Andrea</Link><Link className="pill pill-outline" to="/books/bumbleboo-discovers-the-uae">Explore the Book</Link></div></div></div>
    </section>
  </main>;
}
