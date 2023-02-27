import './App.css';
import { PageLayout } from './components';

function App() {
  return (
  <PageLayout>
    <section className='main-top-wrapper'>
      <div className='main-top-div1'>
        <h3>Video idea generator</h3>
        <div>
          <p>Home</p>
          <img src='/images/blue-arrow-right.svg' alt='arrow'></img>
          <p>Generate video ideas based on keywords & topics</p>
        </div>
        <div className='mid'>
          <img src='/images/emoji-happy.svg' alt='happy'></img>
          <p>Let AI copywriter generate creative and interesting video ideas for your YouTube channel.</p>
        </div>
        <div>
          <p>Saved content: <span style={{backgroundColor:'#F0BF42', color:'black'}}>0</span></p>
          <p>Researched: <span style={{backgroundColor:'#45F042', color:'black'}}>0</span></p>
          <p>Characters count: <span style={{backgroundColor:'#429DF0', borderRadius:'34px', color:'white'}}>292.33k</span></p>
        </div>
      </div>
      <div className='main-top-div2'>
        <h3>Tips to get you started</h3>
        <div>
          <div className='round-div'>
            <img src='/images/key.svg' alt='key'></img>
            <p>Input Keywords</p>
          </div>
          <div className='round-div'>
            <img src='/images/tone.svg' alt='tone'></img>
            <p>Input Keywords</p>
          </div>
          <div className='round-div'>
            <img src='/images/share.svg' alt='share'></img>
            <p>Input Keywords</p>
          </div>
        </div>
      </div>
    </section>
    <section className='main-mid-wrapper'>
      <div style={{display:'flex', flexDirection:'column', rowGap:'9px'}}>
        <div className='mid-left-div'>
          <label className='label'>Input Keyword</label>
            <input type='text' className='input1' />
        </div>
      <div className='bottom-section'>
        <div className='mid-left-div'>
          <label className='label'>Number of copies</label>
          <select type='text' className='input2'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <p className='description'>Maximum 3</p>
        </div>
        <div className='mid-left-div'>
          <label>Creativity level</label>
          <select type='text' className='input2'>
            <option>1</option>
            <option>2</option>
          </select>
          <p className='description' style={{color:'#959494'}}>(Optional)</p>
        </div>
      </div>
      </div>
      <div className='image-wrapper'>
        <img src='/images/generate.svg' alt='generate'></img>
      </div>
    </section>
    <section className='main-mid-wrapper'>
      <div style={{display:'flex', flexDirection:'column', rowGap:'9px'}}>
        <div className='select-containers'>
          <select>
            <option>Tone</option>
          </select>
          <select style={{marginLeft:'28px'}}>
            <option>English</option>
          </select>
        </div>
        <div>
          <textarea placeholder='Generated copy would appear here' className='textarea'/>
        </div>
        <div className='actions-container'>
        <div className='actions'> 
            <img src='/images/edit-2.svg' alt='edit'></img>
            <p>Edit & save</p>
          </div>
          <div className='actions'> 
            <img src='/images/document-copy.svg' alt='copy'></img>
            <p>Copy</p>
          </div>
          <div className='actions'> 
            <img src='/images/share (2).svg' alt='share'></img>
            <p>Convert to post</p>
          </div>
          <div className='actions'> 
            <img src='/images/trash.svg' alt='trash'></img>
            <p>Remove</p>
          </div>
        </div>
      </div>
      <div className='image-wrapper'>
        <img src='/images/post.svg' alt='generate'></img>
      </div>
    </section>
  </PageLayout>
  );
}

export default App;
