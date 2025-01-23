import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const ProductsFilter = ({ filter, setFilter }) => {
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  //   console.log(filter);
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-xl py-5">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            label="Filter"
            onChange={handleChange}
          >
            <MenuItem value="Default">Default</MenuItem>
            <MenuItem value="priceLowToHigh">Price low to high</MenuItem>
            <MenuItem value="priceHighToLow">Price high to low</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default ProductsFilter;
