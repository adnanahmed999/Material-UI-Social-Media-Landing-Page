import {
  Avatar,
  ImageList,
  ImageListItem,
  Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    // backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
  main: {
    position: "sticky",
    top: 60,
  },
}));

const itemData = [
  {
    img: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
    cols: 2,
    title: "Title",
  },
  {
    img: "https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js=",
    cols: 3,
    title: "Title",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOrht0o-4_aeJVmDur5fAUBQg5eVTIPpOwg&usqp=CAU",
    cols: 2,
    title: "Title",
  },
  {
    img: "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
    cols: 2,
    title: "Title",
  },
  {
    img: "https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js=",
    cols: 3,
    title: "Title",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOrht0o-4_aeJVmDur5fAUBQg5eVTIPpOwg&usqp=CAU",
    cols: 2,
    title: "Title",
  },
];

export default function Rightbar() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Typography variant="h6">Online Friends</Typography>
      <AvatarGroup max={4}>
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_1280.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_1280.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_1280.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_1280.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://cdn.pixabay.com/photo/2021/05/04/13/29/portrait-6228705_1280.jpg"
        />
      </AvatarGroup>
      <Typography variant="h6">Images</Typography>
      <div className={classes.root}>
        <ImageList rowHeight={160} className={classes.imageList} cols={3}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={1}>
              <img src={item.img} alt={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}
