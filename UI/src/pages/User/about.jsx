import React from "react";

const About = () => {
  const img01 = "https://images.pexels.com/photos/7100327/pexels-photo-7100327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const img02 = "https://ik.imagekit.io/gokulnathk/PartyEvent/bday.jpeg";
  // const img02=import bday from '../assets/images/bday.jpeg';
  const img03 = "https://ik.imagekit.io/gokulnathk/PartyEvent/party01.jpg";
  

  return (
    <>
      <div className="about-cont">
      <div className="about-box">
          <img src={img02} width={'40%'} />
          <p className="p-10">
          Birthday celebrations hold a special place in our lives, serving as annual milestones that mark our journey through time. These occasions are more than just parties; they are cherished moments to reflect on the past, embrace the present, and anticipate the future. Birthdays offer a precious opportunity to gather with loved ones, strengthening bonds and creating lasting memories. They remind us of the value of life, the significance of our existence, and the accomplishments we've achieved. Whether it's a quiet, intimate gathering or a grand, extravagant affair, birthdays allow us to feel loved, appreciated, and celebrated. They inspire hope, joy, and gratitude, acting as a yearly reset button for our souls. In a fast-paced world, birthday celebrations encourage us to pause, connect, and relish the simple pleasures of life.
          </p>
        </div>
        <div className="about-box">
          <p className="p-10">
          The atmosphere of a birthday celebration is often set by its decorations, which bring life and color to the party space. Personalized banners proudly display the name and age of the birthday honoree, while themed decorations transport guests to magical realms of imagination. Tables are adorned with festive tablecloths and centerpieces, surrounded by plates, cups, and napkins echoing the chosen theme. Candles flicker warmly, casting a soft glow over the festivities, while the tantalizing display of desserts beckons guests to indulge. From the moment they step into the party space, guests are enveloped in a world of joy and celebration, where every decoration serves as a testament to the love and care poured into making the birthday person feel truly special.
          </p>
          <img src={img01} width={'40%'}/>
        </div>
       
        <div className="about-box">
          <img src={img03} width={'40%'}/>
          <p className="p-10">
          DJ music is an electrifying and transformative experience that transcends boundaries and brings people together on the dance floor. It's more than just music; it's a heartbeat that sets the rhythm for unforgettable moments. With the power to turn an ordinary gathering into an extraordinary celebration, a skilled DJ crafts a sonic journey that resonates with diverse tastes and preferences. From the pulsating beats that ignite the dance floor to the soulful melodies that touch hearts, DJ music is a universal language that evokes emotions and creates lasting memories. DJ music invites you to lose yourself in the rhythm, celebrate life, and embrace the magic of the moment, making it an essential element of any event seeking to create an unforgettable experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
