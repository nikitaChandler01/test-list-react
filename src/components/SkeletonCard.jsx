import { Grid, Skeleton, Typography } from "@mui/material";
import React from "react";
const SkeletonCard = () => {
  return (
    <Grid
      style={{
        background: "#4B4B4B",
        padding: "30px 40px",
        borderRadius: 10,
        color: "white",
      }}
      container
      gap={3}
    >
      <Typography variant="h5" textAlign="left">
        <Skeleton variant="rectangle" width={150} height={25}/>
      </Typography>
      <Typography variant="body1" textAlign="left">
      <Skeleton variant="rectangle" width={650} height={100}/>
      </Typography>
      <Grid container justifyContent="flex-end" gap={2}>
        <Typography variant="caption" color="#A0A0A0">
        <Skeleton variant="rectangle" width={60} height={15}/>
        </Typography>
        <Typography variant="caption" color="#A0A0A0">
        <Skeleton variant="rectangle" width={60} height={15}/>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SkeletonCard;
