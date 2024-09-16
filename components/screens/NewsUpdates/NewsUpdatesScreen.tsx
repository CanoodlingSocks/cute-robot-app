import React from 'react';
import { ScrollView } from 'react-native';
import NewsItem from '../../core/NewsItem';

const NewsUpdatesScreen = () => {
  const newsData = [
    {
      title: "Introducing ChubbyBot's Dynamic Duo: EmberBot and Skybot!",
      content: `
Experience the perfect blend of companionship and personality with ChubbyBot's latest newcomers.
These remarkable robots are not only aesthetically appealing with their sleek and bendy arm design, but also packed with distinctive traits to suit your every need.
  
EmberBot, with its fiery personality, is a vibrant companion that will ignite your day.
  
On the other hand, we have SkyBot, the serene companion, designed to bring tranquility to your side. SkyBot's calm and collected demeanor provides a soothing presence in your everyday life.
  
Enjoy the joy of companionship with EmberBot and SkyBot, in stores now!
  `,
      type: 'news',
    },
    {
      title: 'Version 2.5.1 - "Zen Master" Update',
      image: require('../../../assets/updates-imgs/ZenMasterUpdate.png'),
      content: `
This is the update you all have been waiting for! With the new relaxation mode, your robot companions can now provide soothing massages. Now you can unwind after a long day while your robot kneads away your stress.
  
That's not all! We've also added a built-in meditation guide to help you achieve inner peace. Your robot companion will now lead you through calming sessions, complete with robotic mantras and peaceful hums.`,
      type: 'updates',
    },
    {
      title: 'Version 4.2.3 - "Infinite Loop Dance" Bug Patch',
      image: require('../../../assets/updates-imgs/macarena.png'),
      content: `
Fixed a bug that caused the robot to get caught in an infinite loop of dance moves when attempting to perform the Macarena. The robot will now execute the Macarena flawlessly... Or maybe not at all.`,
      type: 'bugfixes',
    },
  ];
  
  return (
    <ScrollView>
      {newsData.map((item, index) => (
        <NewsItem
          key={index}
          title={item.title}
          image={item.image}
          content={item.content}
          type={item.type as 'news' | 'updates' | 'bugfixes'}
          onClick={() => {
         
          }}
        />
      ))}
    </ScrollView>
  );
}

NewsUpdatesScreen.navigationOptions = {
  title: 'News & Updates',
};

export default NewsUpdatesScreen;
