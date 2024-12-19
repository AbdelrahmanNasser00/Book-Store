import { Button, Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import image1 from "../../assets/imgs/carousel-image.webp";
import image2 from "../../assets/imgs/carousel-image-2.webp";
import image3 from "../../assets/imgs/38858726_8666480.svg";
import image4 from "../../assets/imgs/38859283_8673445.svg";

const CarouselContainer = () => {
  const items = [
    {
      name: "New Arrivals",
      description: "Explore our latest collection of books!",
      image: image1,
    },
    {
      name: "Discounted Reads",
      description: "Grab your favorite books at amazing prices!",
      image: image2,
    },

    {
      image: image3,
    },
    {
      image: image4,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl py-8">
      <Carousel
        animation="slide"
        indicators={true}
        navButtonsAlwaysVisible={true}
        interval={4000}
        className="rounded-lg"
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
    <Paper className="relative overflow-hidden">
      <div className="flex h-[500px] items-center justify-center overflow-hidden rounded-lg bg-gray-100">
        <img
          className="h-full w-full object-cover"
          src={item.image}
          alt={item.name}
        />
      </div>
      {item.name && item.description ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 p-6 text-white">
          <h2 className="text-2xl font-bold sm:text-4xl">{item.name}</h2>
          <p className="my-3 text-center text-sm sm:text-base">
            {item.description}
          </p>
          <Button
            sx={{
              backgroundColor: "rgb(99 102 241)", // MUI theme color
              color: "white", // Text color
              "&:hover": {
                backgroundColor: "rgb(79 70 229)", // Darker shade on hover
              },
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
