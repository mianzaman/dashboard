// import { useState } from 'react';
import { TextField, Button, Grid } from "@mui/material";
const Setting = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
      };
  return (
    <div className="single">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Username"
              name="username"
              variant="outlined"
              required
              fullWidth // Makes the input take full width of the Grid item
              sx={{color: "#FFF"}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              name="fullname"
              variant="outlined"
              required
              fullWidth // Makes the input take full width of the Grid item
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              required
              fullWidth // Makes the input take full width of the Grid item
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone"
              name="phone"
              variant="outlined"
              required
              fullWidth // Makes the input take full width of the Grid item
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Status"
              name="status"
              variant="outlined"
              required
              fullWidth // Makes the input take full width of the Grid item
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Update
        </Button>
      </form>
    </div>
  );
};

export default Setting;
