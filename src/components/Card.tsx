interface CardProps {
  image?: {
    url: string;
    alt: string;
    isStar: boolean;
    nbStars: number;
  };
  title: {
    text: string;
    color: string;
    size: string;
    font_size: string;
  };
  subtitle?: {
    text: string;
    color: string;
    size: string;
  };
  description?: {
    text: string;
    color: string;
    size: string;
  };
  bg_color: string;
  rounded: boolean;
  margin_top?: number;
  margin_right?: number;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  description,
  bg_color,
  rounded,
  margin_top,
  margin_right,
}) => {
  const image_list = [];

  if (image?.isStar) {
    for (let i = 0; i < image?.nbStars; i++) {
      image_list.push(image.url);
    }
  }

  return (
    <div
      className={`
        ${rounded ? 'rounded-md' : ''}
        bg-${bg_color}
        ${image ? image?.isStar ? 'px-6 py-2 sm:py-4 w-80 sm:w-full' : 'p-8 w-80 space-y-4' : 'w-72 sm:w-80 space-y-2'}
        flex
        flex-col
        sm:mt-${margin_top}
        sm:mr-${margin_right}
      `}>
      {/* images + title + subtitle  */}
      <div
        className={`
          flex 
          sm:flex-row
          ${image?.isStar ? 'space-y-4 sm:space-y-0 flex-col' : ''}
          items-center
        `}>
        {/* images */}
        {/* stars */}
        <div
          className={`
            flex
            space-x-2
            mr-4
            ${image?.isStar ? '' : 'hidden'}
          `}>
          {image_list.map((value, index) => {
            return (
              <img
                className="w-4"
                key={index}
                src={value}
                alt={image?.alt}
              />
            );
          })}
        </div>
        {/* profile-icon */}
        <div
          className={`
            flex
            space-x-2
            ${image ? image?.isStar ? 'hidden' : '' : 'hidden'}
            mr-4
          `}>
          <img
            className="
              w-10
              rounded-full
            "
            src={image?.url}
            alt={image?.alt}
          />
        </div>
        {/* title + subtitle */}
        <div
          className="
            flex
            flex-col
          ">
          <div>
            <h1
              className={`
                text-${title.color}
                text-${title.size}
                font-${title.font_size}
              `}>
              {title.text}
            </h1>
          </div>
          <div
            className={`
              ${subtitle ? '' : 'hidden'}
            `}>
            <h1
              className={`
                text-${subtitle?.color}
                text-${subtitle?.size}
              `}>
              {subtitle?.text}
            </h1>
          </div>
        </div>
      </div>
      {/* description */}
      <div
        className={`
          ${description ? 'visible' : 'hidden'}
          text-${description?.color}
          text-${description?.size}
        `}>
        {description?.text}
      </div>
      {/* hidden */}
      <div
        className="
          hidden 
          text-bold
          text-semibold
          text-sm
          text-md
          text-xl
          text-1xl
          text-2xl
          text-3xl
          text-4xl
        text-White
        text-Soft-Pink
        text-Light-Grayish-Magenta
        text-Dark-Grayish-Magenta
        text-Very-Dark-Magenta
        bg-Soft-Pink
        bg-Light-Grayish-Magenta
        bg-Dark-Grayish-Magenta
        bg-Very-Dark-Magenta
          sm:mt-8
          sm:mt-16
          sm:mr-8
          sm:mr-16
        "/>
    </div>
  )
}

export default Card;