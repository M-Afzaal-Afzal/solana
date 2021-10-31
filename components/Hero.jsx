import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0),
  margin: theme.spacing(0),
  marginTop: "-5px",
}));
const imgURL = [
  {
    id: 1,
    url: "pics/slide/1.png",
  },
  {
    id: 2,
    url: "pics/slide/2.png",
  },
  {
    id: 3,
    url: "pics/slide/3.png",
  },
  {
    id: 4,
    url: "pics/slide/4.png",
  },
  {
    id: 5,
    url: "pics/slide/5.png",
  },
  {
    id: 6,
    url: "pics/slide/6.png",
  },
  {
    id: 7,
    url: "pics/slide/7.png",
  },
  {
    id: 8,
    url: "pics/slide/8.png",
  },
  {
    id: 9,
    url: "pics/slide/9.png",
  },
  {
    id: 10,
    url: "pics/slide/10.png",
  },
  {
    id: 11,
    url: "pics/slide/11.png",
  },
  {
    id: 1,
    url: "pics/slide/1.png",
  },
  {
    id: 12,
    url: "pics/slide/12.png",
  },
  {
    id: 13,
    url: "pics/slide/13.png",
  },
  {
    id: 14,
    url: "pics/slide/14.png",
  },
  {
    id: 15,
    url: "pics/slide/15.png",
  },
];
function Hero() {
  return (
    <Box id={'home'}>
      <Box className="head" sx={{ position: "relative", width: "100%" }}>
        <img src="pics/background.png" alt="" />
      </Box>
      <Container
        component="div"
        maxWidth="lg"
        id="container-head"
        sx={{
          position: "absolute",
          top: "52%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          mt: 5,
          mb: 5,
        }}
      >
        <Box component="div" className="head-pic" sx={{ width: "20%", mt: 3 }}>
          <img src="pics/front.png" alt="" />
        </Box>
        <Box component="div" className="head-content" sx={{ width: "80%" }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "900", color: "white", mb: 1 }}
            component="div"
            gutterBottom
          >
            WELCOME TO DINOLAND!
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: "900", color: "#F69E1A" }}
            component="div"
            gutterBottom
            id="subtitle"
          >
            The Cutest Ecological NFT Project on Solana
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "white", fontSize: 20 }}
            component="div"
            gutterBottom
            id="paragraph"
          >
            Dinoland is a long lost home of these magnificent prehistoric
            creatures. Recently an old cave was discovered on Solana blockchain
            with 10.000 dino eggs inside. Each one of them will hatch a
            supercute randomly generated Baby Dino with more than 240+ hand
            drawn traits & accesories. The Dinos also differ with their
            rarities, so some of them are rarer and more valuable than others.{" "}
            Since our Dinos have long lost their home, they not only need new
            parents (YOU!), but also a new home. Therefore, after the minting is
            over and all of the Baby Dinos are sold, we will plant 10.000 new
            trees. One for each Dino. Because Dinos need new home and our planet
            needs more trees! So come and mint your Dino!
          </Typography>
        </Box>
      </Container>
      <Grid container gap={0} columns={{ md: 16, sm: 4,xs:4 }}>
        {imgURL.map((item) => (
          <Grid sx={{ boxShadow:'none' }} item xs={1} sm={1} md={1} key={item.id}>
            <Item sx={{ boxShadow:'none' }} className="item">
              <img src={item.url} alt="" />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Hero;
