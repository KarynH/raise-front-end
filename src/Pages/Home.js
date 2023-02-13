const ImageOne = require("/Users/karynhuston/raise/front-end/raise-app/src/12821591_5043079.jpg");
const ImageTwo = require("/Users/karynhuston/raise/front-end/raise-app/src/Screen Shot 2023-02-12 at 8.01.06 PM.png")
const ImageThree = require("/Users/karynhuston/raise/front-end/raise-app/src/4990076_39936.jpg")

export default function Home() {
  return (
    <div className="container">
      <div class="slider">
        <span id="slide-1"></span>
        <span id="slide-2"></span>
        <span id="slide-3"></span>
        <div class="image-container">
        <img  src={ImageOne} class="parenting" alt="parenting"  width="500" height="300"   />
          <img src={ImageTwo} class="slide" alt="family-photo-illustration"width="500" height="300" />
          <img src={ImageThree} class="slide" alt="family-holding-newborn" width="500" height="300" />
        </div>
        <div class="buttons">
          <a href="#slide-1"></a>
          <a href="#slide-2"></a>
          <a href="#slide-3"></a>
        </div>
      </div>
      <artice className="homeArticle">
        <p>raise Is to connect parents and caregivers to an open discussion </p>
    

      </artice>
    </div>
  );
}
