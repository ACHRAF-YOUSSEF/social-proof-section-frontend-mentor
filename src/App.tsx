import Card from './components/Card';
import Footer from './components/Footer';
import star from './assets/icon-star.svg';
import colton from './assets/image-colton.jpg';
import irene from './assets/image-irene.jpg';
import anne from './assets/image-anne.jpg';

import './App.css';

function App() {
  const colton_card = {
    image: {
      url: colton,
      alt: "colton",
      isStar: false,
      nbStars: 0,
    },
    title: {
      text: "Colton Smith",
      color: "White",
      size: "md",
      font_size: "semibold",
    },
    subtitle: {
      text: "Verified Buyer",
      color: "Soft-Pink",
      size: "md",
    },
    description: {
      text: '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"',
      color: "White",
      size: "md",
    },
    bg_color: "Very-Dark-Magenta",
    rounded: true,
    margin_top: 0,
  }

  const irene_card = {
    image: {
      url: irene,
      alt: "irene",
      isStar: false,
      nbStars: 0,
    },
    title: {
      text: "Irene Roberts",
      color: "White",
      size: "md",
      font_size: "semibold",
    },
    subtitle: {
      text: "Verified Buyer",
      color: "Soft-Pink",
      size: "md",
    },
    description: {
      text: '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
      color: "White",
      size: "md",
    },
    bg_color: "Very-Dark-Magenta",
    rounded: true,
    margin_top: 8,
  }

  const anne_card = {
    image: {
      url: anne,
      alt: "anne",
      isStar: false,
      nbStars: 0,
    },
    title: {
      text: "Anne Wallace",
      color: "White",
      size: "md",
      font_size: "semibold",
    },
    subtitle: {
      text: "Verified Buyer",
      color: "Soft-Pink",
      size: "md",
    },
    description: {
      text: '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
      color: "White",
      size: "md",
    },
    bg_color: "Very-Dark-Magenta",
    rounded: true,
    margin_top: 16,
  }

  const reviews_card = {
    image: {
      url: star,
      alt: "5 stars",
      isStar: true,
      nbStars: 5,
    },
    title: {
      text: "Rated 5 Stars in Reviews",
      color: "Very-Dark-Magenta",
      size: "md",
      font_size: "semibold",
    },
    bg_color: "Light-Grayish-Magenta",
    rounded: true,
    margin_top: 16,
    margin_right: 16,
  }

  const report_guru_card = {
    image: {
      url: star,
      alt: "5 stars",
      isStar: true,
      nbStars: 5,
    },
    title: {
      text: "Rated 5 Stars in Report Guru",
      color: "Very-Dark-Magenta",
      size: "md",
      font_size: "semibold",
    },
    bg_color: "Light-Grayish-Magenta",
    rounded: true,
    margin_right: 8,
  }

  const bestTech_card = {
    image: {
      url: star,
      alt: "5 stars",
      isStar: true,
      nbStars: 5,
    },
    title: {
      text: "Rated 5 Stars in BestTech",
      color: "Very-Dark-Magenta",
      size: "md",
      font_size: "semibold",
    },
    bg_color: "Light-Grayish-Magenta",
    rounded: true,
  }

  const card = {
    title: {
      text: "10,000+ of our users love our products.",
      color: "Very-Dark-Magenta",
      size: "4xl",
      font_size: "bold",
    },
    description: {
      text: "We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.",
      color: "Dark-Grayish-Magenta",
      size: "md",
    },
    bg_color: "White",
    rounded: false,
  }

  return (
    <>
      <div
        className='
          flex
          flex-col
          h-screen
          relative
        '>
        {/* top-pattern */}
        <div
          className="
            absolute 
            bg-no-repeat
            bg-cover
            top-0
            left-0
            w-full
            h-1/2
            -translate-x-2/3
            bg_top_style
          "
        />
        {/* bottom-pattern */}
        <div
          className="
            absolute 
            bg-no-repeat
            bg-cover
            bottom-0
            left-1/2
            w-full
            h-1/2
            -translate-x-1/2
            bg_bottom_style
          "
        />
        <main
          className='
            sm:m-auto
            my-16
            space-y-10
            flex
            flex-col
            sm:text-start
            text-center   
            relative
          '>
          <div
            className='
              flex
              sm:flex-row
              flex-col
              items-center
              sm:justify-between
              space-y-10
            '>
            <div>
              <Card {...card} />
            </div>
            <div
              className='
              flex
              flex-col
              space-y-4
              justify-end
              items-end
            '>
              <Card {...reviews_card} />
              <Card {...report_guru_card} />
              <Card {...bestTech_card} />
            </div>
          </div>
          <div
            className='
              flex
              sm:flex-row
              flex-col
              justify-center
              items-center
              sm:space-x-8
              space-y-8
              text-start
            '>
            {/* card-colton */}
            <div>
              <Card {...colton_card} />
            </div>
            {/* card-irene */}
            <div>
              <Card {...irene_card} />
            </div>
            {/* card-anne */}
            <div>
              <Card {...anne_card} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App;