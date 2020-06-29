import React from 'react';
import TextBox from '../TextBox';
import ImageBox from '../ImageBox';
import './Work.css';
import histories from '../../images/histories.png'



const Work = () => {
  return (
    <div className="work-wrapper">
     <div className="content-wrapper">
        <TextBox title="This tells you about her work">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non iaculis lacus. Nullam ac fermentum elit. Sed malesuada imperdiet lectus, at tristique ipsum egestas ac. Morbi neque velit, finibus ut bibendum et, laoreet vitae sapien. Curabitur convallis odio non nulla blandit pharetra. Nulla vel vulputate tortor, porttitor finibus elit. Mauris efficitur dolor maximus, posuere velit in, sollicitudin velit. Vestibulum pulvinar sit amet nisl vitae vestibulum. Nam auctor condimentum placerat. Maecenas sed purus ullamcorper, facilisis leo eget, volutpat nunc.

Duis non pellentesque nibh, a mollis massa. Aenean mollis odio et neque feugiat, id tempor metus mollis. Aenean quis arcu faucibus leo pretium elementum sit amet ac dui. Praesent id tincidunt sem. Nunc bibendum dictum dolor, vitae posuere tortor scelerisque et. Nunc sit amet nulla vel magna.
       </TextBox>
        <ImageBox details='Aphra Behn' source={histories} />
        </div>
     <div className="content-wrapper">
        <TextBox title="This tells you about her work">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non iaculis lacus. Nullam ac fermentum elit. Sed malesuada imperdiet lectus, at tristique ipsum egestas ac. Morbi neque velit, finibus ut bibendum et, laoreet vitae sapien. Curabitur convallis odio non nulla blandit pharetra. Nulla vel vulputate tortor, porttitor finibus elit. Mauris efficitur dolor maximus, posuere velit in, sollicitudin velit. Vestibulum pulvinar sit amet nisl vitae vestibulum. Nam auctor condimentum placerat. Maecenas sed purus ullamcorper, facilisis leo eget, volutpat nunc.

Duis non pellentesque nibh, a mollis massa. Aenean mollis odio et neque feugiat, id tempor metus mollis. Aenean quis arcu faucibus leo pretium elementum sit amet ac dui. Praesent id tincidunt sem. Nunc bibendum dictum dolor, vitae posuere tortor scelerisque et. Nunc sit amet nulla vel magna.
       </TextBox>
        <ImageBox details='Aphra Behn' source={histories} />
        </div>
    </div>
  )
}

export default Work;