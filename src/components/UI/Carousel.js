import { Button, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import BooksImage from "../../assets/imgs/HomePageBooks.svg";
import BooksImage2 from "../../assets/imgs/bookStore-home2.svg";

// import image3 from "../../assets/imgs/38858726_8666480.svg";
// import image4 from "../../assets/imgs/38859283_8673445.svg";

const CarouselContainer = () => {
  const items = [
    {
      name: "New Year Eve discount",
      description: "Get discount in your most favorite brands and products.",
      image: BooksImage,
    },
    {
      name: "Ongoing Flash Sale",
      description: "Grab your favorite books at amazing prices!",
      image: BooksImage2,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl py-8">
      <Carousel
        animation="slide"
        indicators={true}
        navButtonsAlwaysVisible={true}
        interval={4000}
        className="mx-5 h-[500px] rounded-lg border border-gray-200 shadow-none md:h-[600px] lg:mx-0"
        navButtonsProps={{
          style: {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            color: "rgba(0, 0, 0)",
            border: "1px solid rgba(229, 231, 235, 0.8)",
          },
        }}
      >
        {items.map((item, index) => (
          <CarouselItem key={index} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

const CarouselItem = ({ item }) => {
  return (
    <Paper
      elevation={0}
      className="flex h-[500px] flex-col-reverse items-center justify-between rounded-lg shadow-none md:h-[600px] md:flex-row-reverse"
    >
      <div className="flex h-full items-center overflow-hidden rounded-lg md:w-1/2">
        <img
          className="h-full w-full rounded-lg object-cover md:h-auto"
          src={item.image}
          alt={item.name}
        />
      </div>
      {item.name && item.description ? (
        <div className="flex flex-col p-6 text-gray-900 md:py-6 md:pl-16">
          <h2 className="text-2xl font-bold sm:text-4xl">{item.name}</h2>
          <p className="my-3 text-sm text-gray-400 sm:text-base">
            {item.description}
          </p>
          <Button
            sx={{
              backgroundColor: "rgb(99, 102, 241,0.2)",
              color: "rgb(99 102 241)",
              boxShadow: "none",
              width: "10rem",
            }}
            variant="contained"
            className="mt-4"
          >
            Explore Now
          </Button>
        </div>
      ) : null}
    </Paper>
  );
};

export default CarouselContainer;
