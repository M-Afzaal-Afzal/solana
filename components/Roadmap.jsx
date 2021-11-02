import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import RoadmapContent from "./RoadmapContent";

const RoadmapData=[
    {
        id: 1,
        title:"10%",
        url:"/pics/roadmap/egg 1.png",
        query:"Website Launch",
        answer:"Website is live and preparing for the Dino day."
    },
    {
        id: 2,
        title:"20%",
        url:"/pics/roadmap/egg 2.png",
        query:"Pre-launch giveaways",
        answer:"We will announce at least 50 giveaways. We will pick random participants from our Discord & Twitter and reward them with their own Baby Dino on the launch day. Any memeber of our community can be the lucky winner!"
    },
    {
        id: 3,
        title:"40%",
        url:"/pics/roadmap/egg 3.png",
        query:"Launch & Minting",
        answer:"All of 10.000 Baby Dinos will be released on our website to the community in a fair minting process"
    },
    {
        id: 4,
        title:"50%",
        url:"/pics/roadmap/egg 4.png",
        query:"Marketplace Integration",
        answer:"You can buy or sell your Baby Dinos on Solsea after the launch."
    },
    {
        id: 5,
        title:"60%",
        url:"/pics/roadmap/egg 5.png",
        query:"Buyback",
        answer:"After 50% of the Dinos are minted, we will buy back Dinos worth 200 SOL to speed things up and protect floor price."
    },
    {
        id: 6,
        title:"70%",
        url:"/pics/roadmap/egg 6.png",
        query:"Buyback II",
        answer:"After 90% of Dinos are minted, we will buy back Dinos worth 300 SOL to protect floor price."
    },
    {
        id: 7,
        title:"80%",
        url:"/pics/roadmap/egg 7.png",
        query:"Royalties Sharing",
        answer:"After 100% of the Dinos are minted, we will start sharing the royalties with our hodlers. 20 % of the royalties will be distributed among all the wallets holding at least 5 Dinos. Distribution will function on weekly basis."
    },
    {
        id: 8,
        title:"90%",
        query:"Tree planting",
        url:"/pics/roadmap/egg 8.png",
        answer:"After all the Dinos are sold, we will plant 10.000 new trees. One tree for each Dino. Because Dinos need a new home and our planet needs more trees. "
    },
    {
        id: 9,
        title:"100%",
        url:"/pics/roadmap/egg 9.png",
        query:"Big Dinos coming",
        answer:"Time for the Big Dinos! Because the Dinos not only need a new home, but they also need family. So a new collection will be introduced and airdroped to our hodlers. Any wallet holding at least 5 Dinos will receive a free NFT of Big Dino."
    }
];
const createContent = (data) => {
    return (<RoadmapContent 
        id={data.id}
        URL={data.url}
        title={data.title}
        query={data.query}
        answer={data.answer}
     />)
}

function Roadmap() {
  return (
    <Box
        id={'roadmap'}
      component="div"
      sx={{
        backgroundColor: "#277B00",
        width: "100%",
        minHeight: "100vh",
        // marginTop: "-7px",
          py: '4rem',
        zIndex: 111,
        position: "relative",
      }}
    >
      <Container
        component="div"
        maxWidth="lg"
        id="container-roadmap"
        sx={{
          py: 7,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "900",
              fontFamily: `'Paytone One', sans-serif`,
              color: "#FFFCF8", mb: 1 }}
          component="div"
          gutterBottom
        >
          Roadmap
        </Typography>
        {RoadmapData.map(createContent)}
      </Container>
    </Box>
  );
}

export default Roadmap;
