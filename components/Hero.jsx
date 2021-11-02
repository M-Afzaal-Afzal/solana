import Container from "@mui/material/Container";
import {Box} from "@mui/system";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import {experimentalStyled as styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Image from 'next/image';

const Item = styled(Paper)(({theme}) => ({
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
            {/* this is just for top layout space */}
            <Box sx={{
                height: '90px',
                width: '100%',
            }}/>
            {/*<Box className="head" sx={{ position: "relative", width: "100%" }}>*/}
            {/*  <img src="pics/background.png" alt="" />*/}
            {/*</Box>*/}

            <Box sx={{
                position: 'relative',
            }}>

                <Box>
                    <Image src={'/pics/background.png'} alt={'Background Image'} layout={'fill'} objectFit={'cover'}/>
                </Box>

                <Container
                    component="div"
                    maxWidth="lg"
                    id="container-head"
                    sx={{
                        position: "relative",
                        py: '4rem',
                        // top: "52%",
                        // left: "50%",
                        // transform: "translate(-50%,-50%)",
                        lineHeight: '23.14px',
                        display: "grid",

                        placeItems: {
                            xs: 'center',
                            // lg: 'unset',
                        },
                        gridGap: '1rem',
                        gridTemplateColumns: {
                            xs: '1fr',
                            lg: 'auto 1fr'
                        },
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "100vh",
                        // mt: 5,
                        // mb: 5,
                    }}
                >


                    <Box component="div">
                        <Image width={384} height={426} src="/pics/front.png" alt=""/>
                    </Box>
                    <Box component="div" className="head-content">
                        <Typography
                            variant="h3"
                            sx={{
                                // lineHeight: '23.14px',
                                fontFamily: `'Paytone One', sans-serif`,
                                fontWeight: "900",
                                color: "white", mb: 1,
                                textAlign: {
                                    xs: 'center',
                                    lg: 'left',
                                },
                                textShadow: '2px 2px 4px #00000066',

                            }}
                            component="div"
                            gutterBottom
                        >
                            WELCOME TO DINOLAND!
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                // lineHeight: '23.14px',
                                fontFamily: `'Paytone One', sans-serif`,
                                fontWeight: "900", color: "#F69E1A", textAlign: {
                                    xs: 'center',
                                    lg: 'left',
                                },
                                textShadow: '2px 2px 4px #00000066',
                                pt: '1rem',
                            }}
                            component="div"
                            gutterBottom
                            id="subtitle"
                        >
                            The Cutest Ecological NFT Project on Solana
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontFamily: `'Play', sans-serif`,

                                lineHeight: '23.14px',
                                color: "white", fontSize: 20, textAlign: {
                                    xs: 'center',
                                    lg: 'left',
                                }
                            }}
                            component="div"
                            gutterBottom
                            id="paragraph"
                        >
                            Dinoland is a long lost home of these magnificent prehistoric creatures. Recently an old
                            cave was discovered on Solana blockchain with 10.000 dino eggs inside. Each one of them will
                            hatch a supercute randomly generated Baby Dino with more than 240+ hand drawn traits &
                            accesories. The Dinos also differ with their rarities, so some of them are rarer and more
                            valuable than others.
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            sx={{
                                lineHeight: '23.14px',
                                color: "white", fontSize: 20, textAlign: {
                                    xs: 'center',
                                    lg: 'left',
                                },
                                pt: '1rem',
                                fontFamily: `'Play', sans-serif`,
                            }}
                            component="div"
                            gutterBottom
                            id="paragraph"
                        >
                            Since our Dinos have long lost their home, they not only need new parents (YOU!), but also a
                            new home. Therefore, after the minting is over and all of the Baby Dinos are sold, we will
                            plant 10.000 new trees. One for each Dino. Because Dinos need new home and our planet needs
                            more trees!
                        </Typography>

                        <Typography
                            variant="subtitle1"

                            sx={{
                                lineHeight: '23.14px',

                                color: "white", fontSize: 20, textAlign: {
                                    xs: 'center',
                                    lg: 'left',
                                },
                                pt: '1rem',
                                fontFamily: `'Play', sans-serif`,
                            }}
                            component="div"
                            gutterBottom
                            id="paragraph"
                        >
                            So come and mint your Dino!
                        </Typography>

                        <Box sx={{
                            pt: '1rem',
                            display: 'flex',
                            justifyContent: {
                                xs: 'center',
                                lg: 'flex-start',
                            },
                        }}>
                            <Image width={216} height={25} src="/pics/logoWhite.png" alt=""/>
                        </Box>
                    </Box>
                </Container>

            </Box>

            <Grid container gap={0} columns={{md: 16, sm: 4, xs: 4}}>
                {imgURL.map((item) => (
                    <Grid sx={{boxShadow: 'none', mb: '-5px'}} item xs={1} sm={1} md={1} key={item.id}>
                        <Item sx={{boxShadow: 'none'}} className="item">
                            <img src={item.url} alt=""/>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Hero;
