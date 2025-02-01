import { Autocomplete, createFilterOptions, TextField,Box } from "@mui/material";

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
  });
const SearchBar = ({civilizaciones, setCivilizacion})=>{

    return <Autocomplete 
        id="select-civilizacion"
        sx={{ width: 500, backgroundColor: "#DDD" }}
        options={civilizaciones}
        autoHighlight
        onChange={(event, newValue) => {
            setCivilizacion(newValue);
        }}
        getOptionLabel={(option) => option.name}
        filterOptions={filterOptions}        
        renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
            <Box
            key={key}
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...optionProps}
            >
                <img
                    loading="lazy"
                    width="20"
                    src={import.meta.env.VITE_API_BASE_IMG+option.left_image}
                    alt={option.name}
                />
                {option.name}
            </Box>
        );
        }}
        renderInput={(params) => (
        <TextField
            {...params}
            label="Elegir civilización"
            slotProps={{
            htmlInput: {
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
            },
            }}
        />
        )}

    />
}

export default SearchBar;