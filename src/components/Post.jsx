import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "coral" }} aria-label="recipe">
            J.A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Jane Austen"
        subheader="January 2, 2026"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/4888474/pexels-photo-4888474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="fallout"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore saepe corporis fuga aperiam. Enim quae impedit rerum velit, cumque est pariatur, hic, eius architecto soluta itaque placeat consectetur nisi amet natus voluptatibus.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;